import { useEffect, useState } from 'react'
import { useUser } from '@clerk/nextjs'
export function useOpenCart () {
  const { isSignedIn } = useUser()
  const [openCart, setOpenCart] = useState(false)
  useEffect(() => {
    isSignedIn ? setOpenCart(true) : setOpenCart(false)
  }, [isSignedIn])
  return { openCart, setOpenCart }
}
