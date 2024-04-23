import { useEffect, useState } from 'react'
import { useCartStore } from '../_store/cartStore'
export function useOpenCart () {
  const [openCart, setOpenCart] = useState(false)
  const cart = useCartStore(state => state.cart)
  useEffect(() => {
    openCart === false && setOpenCart(true)
  }, [cart])
  return { openCart, setOpenCart }
}
