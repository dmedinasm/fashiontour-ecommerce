import React, { useState } from 'react'
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useUser } from '@clerk/nextjs'
import { useCartStore } from '../../_store/cartStore'

const CheckoutForm = ({ amount }) => {
  const { user } = useUser()
  const cart = useCartStore(state => state.cart)
  const stripe = useStripe()
  const elements = useElements()
  const [errorMessage, setErrorMessage] = useState()
  const [loading, setLoading] = useState(false)
  console.log(cart)
  const handleError = (error) => {
    setLoading(false)
    setErrorMessage(error.message)
  }

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault()
    setLoading(true)
    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return
    }
    const { error: submitError } = await elements.submit()
    if (submitError) {
      handleError(submitError)
      return
    }

    const createOrder = async () => {
      try {
        const res = await fetch('/api/order', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: user?.primaryEmailAddress.emailAddress,
            amount,
            userName: user?.fullName,
            cartId: cart?.CartId
          })
        })
        if (!res.ok) throw new Error('Error creating order')
      } catch (err) {
        setErrorMessage(error.message)
      } finally {
        setLoading(false)
      }
    }
    sendEmail()
    createOrder()
    const res = await fetch('/api/create-intent', {
      method: 'POST',
      body: JSON.stringify({ amount })
    })
    const clientPayment = await res.json()
    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret: clientPayment.client_secret,
      confirmParams: {
        return_url: 'http://localhost:3000/payment-confirm'
      }
    })

    if (error) {
      handleError(error)
    }
  }

  const sendEmail = async () => {
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        body: JSON.stringify({
          amount,
          email: user?.primaryEmailAddress.emailAddress,
          fullName: user?.fullName
        })
      })
      if (!res.ok) throw new Error('Error fetching data')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
        <div className='p-8 md:px-52  mt-20'>
           <PaymentElement/>
        <button type="submit" disabled={loading || !stripe || !elements} className='bg-primary text-white p-2 rounded-md w-full mt-8 hover:bg-blue-700'>{loading ? 'Paying...' : 'Submit'}</button>
        {errorMessage && <div className='mt-12 text-red-500'>{errorMessage}</div>}
        </div>

    </form>
  )
}

export default CheckoutForm
