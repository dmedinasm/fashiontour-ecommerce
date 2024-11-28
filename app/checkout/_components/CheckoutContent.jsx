'use client'
import React, { useEffect } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from '../_components/CheckoutForm'
import { useRouter, useSearchParams } from 'next/navigation'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../lib/firebase'
import { useCartStore } from '../../_store/cartStore'
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
const CheckoutContent = () => {
  const searchParams = useSearchParams()
  const options = {
    mode: 'payment',
    currency: 'usd',
    amount: searchParams.get('amount') * 100
  }
  const route = useRouter()
  const { isTryLogin } = useCartStore()
  const [user, loading] = useAuthState(auth)

  useEffect(() => {
    if (!loading) {
      if (!user) {
        route.push('/sign-in')
        isTryLogin(true)
      }
    }
  }, [user, loading, route, isTryLogin])

  if (loading || !user) {
    return <div className='h-screen'></div>
  }

  return (
    <div className='m-auto mb-10 ss:max-w-5xl'>
      <Elements stripe={stripePromise} options={options}>
      <CheckoutForm amount={Number(searchParams.get('amount'))} />
    </Elements>
    </div>
  )
}

export default CheckoutContent
