import React, { useState } from 'react'
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { auth } from '../../lib/firebase'
import ErrorNotification from '../../_components/ErrorNotification'
import { createOrder } from '../../lib/data'
import { useCartStore } from '../../_store/cartStore'
const CheckoutForm = ({ amount }) => {
  const stripe = useStripe()
  const elements = useElements()
  const [errorMessage, setErrorMessage] = useState()
  const [loading, setLoading] = useState(false)
  const baseUrl = process.env.NODE_ENV === 'production' ? 'https://fashiontour-ecommerce.vercel.app/' : 'http://localhost:3000'
  const { isOpenCart } = useCartStore()

  const handleError = (error) => {
    setLoading(false)
    setErrorMessage(error.message)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)

    if (!stripe || !elements) {
      setLoading(false)
      return
    }

    try {
      // 1. Submit the form
      const { error: submitError } = await elements.submit()
      if (submitError) throw submitError

      /* // 2. Create order
      createOrder(auth.currentUser.email, amount, auth.currentUser.displayName)

      // 3. Send email
      await sendEmail()

      isOpenCart(true)
      // 4. Create payment intent
      const clientPayment = await createPaymentIntent() */

      const [, , clientPayment] = await Promise.all([
        createOrder(auth.currentUser.email, amount, auth.currentUser.displayName),
        sendEmail(),
        createPaymentIntent()
      ])

      isOpenCart(true)

      // 5. Confirm payment
      const { error: paymentError } = await stripe.confirmPayment({
        elements,
        clientSecret: clientPayment.client_secret,
        confirmParams: {
          return_url: `${baseUrl}/payment-confirm`,
          payment_method_data: {
            billing_details: {
              name: auth.currentUser.displayName,
              email: auth.currentUser.email
            }
          }
        }
      })

      if (paymentError) throw paymentError

      // If we reach here, it means all operations were successful
      // The user will be redirected to the return_url
    } catch (error) {
      handleError(error)
    } finally {
      setLoading(false)
    }
  }

  const sendEmail = async () => {
    const res = await fetch('/api/send-email', {
      method: 'POST',
      body: JSON.stringify({
        amount,
        email: auth?.currentUser.email,
        fullName: auth?.currentUser.displayName
      })
    })
    if (!res.ok) throw new Error('Error sending email')
  }

  const createPaymentIntent = async () => {
    const res = await fetch('/api/create-intent', {
      method: 'POST',
      body: JSON.stringify({ amount })
    })
    if (!res.ok) throw new Error('Error creating payment intent')
    return res.json()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='p-8 md:px-52 mt-20'>
        <PaymentElement/>
        <button
          type="submit"
          disabled={loading || !stripe || !elements}
          className='bg-primary text-white p-2 rounded-md w-full mt-8 hover:bg-blue-700'
        >
          {loading ? 'Processing...' : 'Pay Now'}
        </button>
        {errorMessage && <ErrorNotification/>}
      </div>
    </form>
  )
}

export default CheckoutForm
