import { create } from 'zustand'

export const useCartStore = create((set) => ({
  cart: [],
  tryLogin: false,
  cartLength: 0,
  openCart: false,

  isTryLogin: (trying) => {
    trying ? set({ tryLogin: true }) : set({ tryLogin: false })
  },
  isOpenCart: (open) => {
    open ? set({ openCart: true }) : set({ openCart: false })
  },
  getCart: (cart) => {
    set({ cart })
  }
}))
