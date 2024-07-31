import { useUser } from '@clerk/nextjs'
import { useEffect, useState } from 'react'
export function useTryLogin () {
  const [isTryLogin, setIsTryLogin] = useState()
  const { isSignedIn } = useUser()
  useEffect(() => {
    setIsTryLogin(window.location.href.toString().includes('sign-in') || window.location.href.toString().includes('sign-up'))
  }, [isSignedIn])
  return { isTryLogin }
}
