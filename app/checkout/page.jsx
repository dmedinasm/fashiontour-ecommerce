'use client'
import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from './_components/CheckoutForm'
import { useSearchParams } from 'next/navigation'
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
console.log(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
const Checkout = () => {
  const searchParams = useSearchParams()
  console.log(searchParams.get('amount'))
  const options = {
    mode: 'payment',
    currency: 'usd',
    amount: searchParams.get('amount') * 100
  }

  return (
    <div className='my-40'>
      <Elements stripe={stripePromise} options={options} >
      <CheckoutForm amount={searchParams.get('amount')} />
    </Elements>
    </div>
  )
}

export default Checkout
