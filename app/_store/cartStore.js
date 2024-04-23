import { create } from 'zustand'
import { getUserCartItems } from '../_services/cartItems'
import { addToCart } from '../_services/addToCart'
import { deleteCartItem } from '../_services/deleteCartItems'
import { createOrder } from '../_services/createOrder'
export const useCartStore = create((set, get) => ({
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
  },

  createOrderFromCart: (data) => {
    const cartItems = get().cart
    createOrder(data).then(res => {
      cartItems.forEach(element => {
        deleteCartItem(element.id).then(res => {
          console.log(res)
        })
      })
      set({ cart: [] })
    })
  }
}))
