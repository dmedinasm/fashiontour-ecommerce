import { useEffect, useState } from 'react'
import { auth } from '../lib/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCartStore } from '../_store/cartStore'
export function useOpenCart () {
  const [user] = useAuthState(auth)
  const { isOpenCart } = useCartStore()
  useEffect(() => {
    user ? isOpenCart(true) : isOpenCart(false)
  }, [user])//eslint-disable-line
}
