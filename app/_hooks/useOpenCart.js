import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../_context/CartContext'
export function useOpenCart () {
  const [openCart, setOpenCart] = useState(false)
  const { changedCart } = useContext(CartContext)
  useEffect(() => {
    openCart === false && setOpenCart(true)
  }, [changedCart])
  return { openCart, setOpenCart }
}
