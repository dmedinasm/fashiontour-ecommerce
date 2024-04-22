import { create } from 'zustand'
import { getUserCartItems } from '../_services/cartItems'
import { addToCart } from '../_services/addToCart'
import { deleteCartItem } from '../_services/deleteCartItems'
export const useCartStore = create((set) => ({
  cart: [],
  getCart: (email) => {
    getUserCartItems(email).then(res => {
      set({ cart: res })
    })
  },
  addProductToCart: (data) => {
    addToCart(data).then(res => {
      getUserCartItems(data.data.email).then(res => {
        set({ cart: res })
      })
    })
  },
  deleteItemfromCart: ({ id, email }) => {
    deleteCartItem(id).then(res => {
      getUserCartItems(email).then(res => {
        set({ cart: res })
      })
    })
  }
}))
