/* import React, { useState } from 'react'
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useUser } from '@clerk/nextjs'
import { useCartStore } from '../../_store/cartStore'
import ErrorNotification from '../../_components/ErrorNotification'

const CheckoutForm = ({ amount }) => {
  const { user } = useUser()
  const cart = useCartStore(state => state.cart)
  const stripe = useStripe()
  const elements = useElements()
  const [errorMessage, setErrorMessage] = useState()
  const [loading, setLoading] = useState(false)
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
        setErrorMessage(err.message)
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
    } catch (err) {
      setErrorMessage(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
        <div className='p-8 md:px-52  mt-20'>
           <PaymentElement/>
        <button type="submit" disabled={loading || !stripe || !elements} className='bg-primary text-white p-2 rounded-md w-full mt-8 hover:bg-blue-700'>{loading ? 'Paying...' : 'Submit'}</button>
        {errorMessage && <ErrorNotification/>}
        </div>

    </form>
  )
}

export default CheckoutForm */

import React, { useState } from 'react'
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useUser } from '@clerk/nextjs'
import { useCartStore } from '../../_store/cartStore'
import ErrorNotification from '../../_components/ErrorNotification'

const CheckoutForm = ({ amount }) => {
  const { user } = useUser()
  const cart = useCartStore(state => state.cart)
  const stripe = useStripe()
  const elements = useElements()
  const [errorMessage, setErrorMessage] = useState()
  const [loading, setLoading] = useState(false)

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

      // 2. Create order
      await createOrder()

      // 3. Send email
      await sendEmail()

      // 4. Create payment intent
      const clientPayment = await createPaymentIntent()

      // 5. Confirm payment
      const { error: paymentError } = await stripe.confirmPayment({
        elements,
        clientSecret: clientPayment.client_secret,
        confirmParams: {
          return_url: 'http://localhost:3000/payment-confirm'
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

  const createOrder = async () => {
    const res = await fetch('/api/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: user?.primaryEmailAddress.emailAddress,
        amount,
        userName: user?.fullName,
        cartId: cart?.CartId
      })
    })
    if (!res.ok) throw new Error('Error creating order')
  }

  const sendEmail = async () => {
    const res = await fetch('/api/send-email', {
      method: 'POST',
      body: JSON.stringify({
        amount,
        email: user?.primaryEmailAddress.emailAddress,
        fullName: user?.fullName
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
