'use client'
import { useUser } from '@clerk/nextjs'
import { useEffect, useState } from 'react'
import { useCartStore } from '../_store/cartStore'
import { auth } from '../lib/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
export function useTryLogin (email) {
  const [isTryLogin, setIsTryLogin] = useState(false)
  const [user] = useAuthState(auth)
  /* const getCart = useCartStore(state => state.getCart) */
  useEffect(() => {
    const isAttemptingLogin = window.location.href.includes('sign-in')
    setIsTryLogin(isAttemptingLogin)
    /* if (isSignedIn) {
      getCart(email)
    } */
  }, [user])

  return { isTryLogin }
}
