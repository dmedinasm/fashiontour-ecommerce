'use client'
import { useUser } from '@clerk/nextjs'
import { useEffect, useState } from 'react'
import { useCartStore } from '../_store/cartStore'
export function useTryLogin (email) {
  const [isTryLogin, setIsTryLogin] = useState(false)
  const { isSignedIn } = useUser()
  const getCart = useCartStore(state => state.getCart)
  useEffect(() => {
    const isAttemptingLogin = window.location.href.includes('sign-in') || window.location.href.includes('sign-up')
    setIsTryLogin(isAttemptingLogin)
    if (isSignedIn) {
      getCart(email)
    }
  }, [isSignedIn])

  return { isTryLogin }
}
