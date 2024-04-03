import React from 'react'

import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'

const CheckoutForm = () => {
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault()

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return
    }

    const res = await fetch('/api/create-intent', {
      method: 'POST',
      body: JSON.stringify({ amount: 10 })
    })
    const clientSecret = await res.json()
    const result = await stripe.confirmPayment({
      // `Elements` instance that was used to create the Payment Element
      clientSecret,
      elements,
      confirmParams: {
        return_url: 'http://localhost:3000'
      }
    })

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message)
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  }

  return (
    <form onClick={handleSubmit}>
        <div className='px-32 sm:mx-[250px] mt-12'>
        <PaymentElement/>
        <button className='bg-primary text-white p-2 rounded-md w-full mt-8 hover:bg-blue-700'>Submit</button>
        </div>

    </form>
  )
}

export default CheckoutForm
