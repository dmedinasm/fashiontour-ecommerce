import { useState, useEffect } from 'react'

export function useTotalAmount ({ cart }) {
  const [totalPrice, setTotalPrice] = useState(0)
  useEffect(() => {
    if (!cart || cart.length === 0) return
    const newCart = [...cart]
    const total = newCart?.reduce((acc, item) => acc + (item.product.price * item.quantity), 0).toFixed(2)
    setTotalPrice(total)
  }, [cart])
  return { totalPrice }
}
