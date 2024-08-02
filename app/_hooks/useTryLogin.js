'use client'
import { useUser } from '@clerk/nextjs'
import { useEffect, useState } from 'react'
export function useTryLogin () {
  const [isTryLogin, setIsTryLogin] = useState(false)
  const { isSignedIn } = useUser()
  useEffect(() => {
    const isAttemptingLogin = window.location.href.includes('sign-in') || window.location.href.includes('sign-up')
    /* if (isSignedIn && isAttemptingLogin) {
      window.history.go(-(window.history.length - 1))
    } */
    setIsTryLogin(isAttemptingLogin)
  }, [isSignedIn])

  return { isTryLogin }
}
