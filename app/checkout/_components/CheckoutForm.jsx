import React, { useState } from 'react'
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useUser } from '@clerk/nextjs'
import { useCartStore } from '../../_store/cartStore'

const CheckoutForm = ({ amount }) => {
  const { user } = useUser()
  const cart = useCartStore(state => state.cart)
  const createOrderFromCart = useCartStore(state => state.createOrderFromCart)
  const productsIds = cart.map(element => {
    return element?.attributes?.products.data[0].id
  })
  const data = {
    data: {
      email: user.primaryEmailAddress.emailAddress,
      amount,
      userName: user.fullName,
      products: productsIds
    }
  }

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

    createOrderFromCart(data)
    sendEmail()
    const res = await fetch('/api/create-intent', {
      method: 'POST',
      body: JSON.stringify({ amount })
    })
    const clientPayment = await res.json()
    const { error } = await stripe.confirmPayment({
      // `Elements` instance that was used to create the Payment Element
      elements,
      clientSecret: clientPayment.client_secret,
      confirmParams: {
        return_url: 'http://localhost:3000/payment-confirm'
      }
    })

    if (error) {
      // Show error to your customer (for example, payment details incomplete)
      handleError(error)
    } // else {
    // Your customer will be redirected to your `return_url`. For some payment
    // methods like iDEAL, your customer will be redirected to an intermediate
    // site first to authorize the payment, then redirected to the `return_url`.
    // }
  }

  const sendEmail = async () => {
    const res = await fetch('/api/send-email', {
      method: 'POST',
      body: JSON.stringify({
        amount,
        email: user.primaryEmailAddress.emailAddress,
        fullName: user.fullName
      })
    })
    const data = await res.json()
  }

  return (
    <form onSubmit={handleSubmit}>
        <div className='p-8 ss:px-32  mt-20'>
           <PaymentElement/>
        <button type="submit" disabled={loading || !stripe || !elements} className='bg-primary text-white p-2 rounded-md w-full mt-8 hover:bg-blue-700'>Submit</button>
        {errorMessage && <div className='mt-12 text-red-500'>{errorMessage}</div>}
        </div>

    </form>
  )
}

export default CheckoutForm
