'use client'
import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from './_components/CheckoutForm'
import { useRouter, useSearchParams } from 'next/navigation'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../lib/firebase'
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
const Checkout = () => {
  const searchParams = useSearchParams()
  const options = {
    mode: 'payment',
    currency: 'usd',
    amount: searchParams.get('amount') * 100
  }
  const route = useRouter()
  const [user] = useAuthState(auth)

  if (!user) {
    route.push('/sign-in')
  }
  return (
    <div className='mx-auto my-40 ss:max-w-5xl'>
      <Elements stripe={stripePromise} options={options}>
      <CheckoutForm amount={Number(searchParams.get('amount'))} />
    </Elements>
    </div>
  )
}

export default Checkout
