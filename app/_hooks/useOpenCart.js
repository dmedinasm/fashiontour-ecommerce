import { useEffect, useState } from 'react'
import { useCartStore } from '../_store/cartStore'
import { useUser } from '@clerk/nextjs'
export function useOpenCart () {
  const { isSignedIn } = useUser()
  const [openCart, setOpenCart] = useState(false)
  const cart = useCartStore(state => state.cart)
  useEffect(() => {
    isSignedIn && setOpenCart(true)
  }, [cart, isSignedIn])
  return { openCart, setOpenCart }
}
