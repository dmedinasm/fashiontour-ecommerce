import { create } from 'zustand'
import { getUserCartItems } from '../_services/cartItems'
import { addToCart } from '../_services/addToCart'
import { deleteCartItem } from '../_services/deleteCartItems'
import { createOrder } from '../_services/createOrder'
import { toast } from 'sonner'

export const useCartStore = create((set, get) => ({
  cart: [],
  loading: false,
  error: null,
  getCart: (email) => {
    getUserCartItems(email).then(res => {
      const newRes = structuredClone(res)
      const products = newRes.map(element => {
        return { ...element, productCartQty: 1 }
      })
      set({ cart: products })
    })
  },
  addProductToCart: (data) => {
    set({ loading: true })
    addToCart(data)
      .then(res => {
        const idCartProductAdded = res.data.id
        getUserCartItems(data.data.email).then(res => {
          const newCartProduct = res.find(element => element.id === idCartProductAdded)
          newCartProduct.productCartQty = 1
          const cartItems = get().cart
          const newCartItems = [...cartItems, newCartProduct]
          set({ error: null })
          set({ cart: newCartItems })
          toast.success('Product added to cart')
        })
      })
      .catch(err => {
        set({ error: err })
        toast.error(`Error adding product to cart: ${err.message}`)
      })
      .finally(() => set({ loading: false }))
  },
  deleteItemfromCart: ({ id }) => {
    set({ loading: true })
    deleteCartItem(id)
      .then(res => {
        console.log(res)
        const idProductDeleted = res.data.id
        const cartItems = get().cart
        const newCartItems = cartItems.filter(element => element.id !== idProductDeleted)
        set({ cart: newCartItems })
        toast.success('Product removed from cart')
      })
      .catch((err) => {
        toast.error(`Error deleting product from cart: ${err.message}`)
      })
      .finally(() => set({ loading: false }))
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
  },
  incrementProductCartQty: ({ id }) => {
    const cartItems = get().cart
    const newCartItems = cartItems.map(element => {
      if (element.id === id) {
        return { ...element, productCartQty: element.attributes.products.data[0].attributes.quantity === element.productCartQty ? element.attributes.products.data[0].attributes.quantity : element.productCartQty + 1 }
      } else {
        return element
      }
    })
    set({ cart: newCartItems })
  },
  decrementProductCartQty: ({ id }) => {
    const cartItems = get().cart
    const newCartItems = cartItems.map(element => {
      if (element.id === id) {
        return { ...element, productCartQty: element.productCartQty === 1 ? 1 : element.productCartQty - 1 }
      } else {
        return element
      }
    })
    set({ cart: newCartItems })
  }
}))
