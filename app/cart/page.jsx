'use client'
import React from 'react'
import CartDetail from '../cart/CartDetail'
import { auth } from '../lib/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRouter } from 'next/navigation'
import { useCartStore } from '../_store/cartStore'
export default function CartItems () {
  const route = useRouter()
  const [user] = useAuthState(auth)
  const { isTryLogin } = useCartStore()

  if (!user) {
    route.push('/sign-in')
    isTryLogin(true)
    return
  }
  return (
   <>
    <CartDetail/>
   </>
  )
}
