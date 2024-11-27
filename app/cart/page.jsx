'use client'
import React, { useEffect } from 'react'
import CartDetail from '../cart/CartDetail'
import { auth } from '../lib/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRouter } from 'next/navigation'
import { useCartStore } from '../_store/cartStore'

export default function CartItems () {
  const router = useRouter()
  const [user, loading] = useAuthState(auth)
  const { isTryLogin } = useCartStore()

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push('/sign-in')
        isTryLogin(true)
      }
    }
  }, [user, loading, router, isTryLogin])

  if (loading || !user) {
    return <div className='h-screen'></div>
  }

  return <CartDetail />
}
