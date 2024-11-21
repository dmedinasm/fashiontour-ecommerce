'use client'
import React from 'react'
import CartDetail from '../cart/CartDetail'
import { auth } from '../lib/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRouter } from 'next/navigation'
export default function CartItems () {
  const route = useRouter()
  const [user] = useAuthState(auth)

  if (!user) {
    route.push('/sign-in')
  }
  return (
   <>
    <CartDetail/>
   </>
  )
}
