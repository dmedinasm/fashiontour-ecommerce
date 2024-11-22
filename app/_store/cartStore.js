import { create } from 'zustand'

export const useCartStore = create((set, get) => ({
  tryLogin: false,
  cartLength: 0,
  openCart: false,

  isTryLogin: (trying) => {
    trying ? set({ tryLogin: true }) : set({ tryLogin: false })
  },
  isOpenCart: (open) => {
    open ? set({ openCart: true }) : set({ openCart: false })
  },
  handleCart: (userValue) => {
    const openValue = get().openCart
    set({ openCart: !openValue })
    userValue ? set({ openCart: true }) : set({ openCart: false })
  },
  getCartLength: (length) => {
    set({ cartLength: length })
  }
}))
