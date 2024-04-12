import { useEffect, useState } from 'react'

export function useTryLogin () {
  const [isTryLogin, setIsTryLogin] = useState()
  useEffect(() => {
    setIsTryLogin(window.location.href.toString().includes('sign-in') || window.location.href.toString().includes('sign-up'))
  }, [])
  return { isTryLogin }
}
