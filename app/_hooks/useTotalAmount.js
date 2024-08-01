import { useState, useEffect } from 'react'

export function useTotalAmount ({ cart }) {
  const [totalPrice, setTotalPrice] = useState(0)
  useEffect(() => {
    if (cart?.length === 0) {
      setTotalPrice(0)
      return
    }
    const newCart = [...cart]
    const total = newCart?.reduce((acc, item) => acc + (item.product.price * item.quantity), 0).toFixed(2)
    setTotalPrice(total)
  }, [cart])
  return { totalPrice }
}
