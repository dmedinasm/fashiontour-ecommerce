import { useEffect, useState } from 'react'
import { auth } from '../lib/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
export function useOpenCart () {
  const [user] = useAuthState(auth)
  const [openCart, setOpenCart] = useState(false)
  useEffect(() => {
    user ? setOpenCart(true) : setOpenCart(false)
  }, [user])
  return { openCart, setOpenCart }
}
