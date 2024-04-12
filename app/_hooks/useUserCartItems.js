import { useEffect, useState, useContext } from 'react'
import { getUserCartItems } from '../_services/cartItems'
import { CartContext } from '../_context/CartContext'
export function useUserCartItems ({ email, isSignedIn }) {
  const [cart, setCart] = useState([])
  const { changedCart } = useContext(CartContext)
  useEffect(() => {
    isSignedIn && getUserCartItems(email).then(res => {
      setCart(res)
    })
  }, [isSignedIn, changedCart])
  return { cart }
}
