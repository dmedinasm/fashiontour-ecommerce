import { useEffect } from 'react'
import { useCartStore } from '../_store/cartStore'
export function useUserCartItems ({ email, isSignedIn }) {
  const getCart = useCartStore(state => state.getCart)
  useEffect(() => {
    isSignedIn && getCart(email)
  }, [isSignedIn])
}
