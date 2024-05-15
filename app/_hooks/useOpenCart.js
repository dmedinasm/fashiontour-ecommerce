import { useEffect, useState } from 'react'
import { useCartStore } from '../_store/cartStore'
export function useOpenCart () {
  const [openCart, setOpenCart] = useState(false)
  const cart = useCartStore(state => state.cart)
  useEffect(() => {
    cart.length > 0 && setOpenCart(true)
  }, [cart])
  return { openCart, setOpenCart }
}
