import { create } from 'zustand'
import { toast } from 'sonner'

export const useCartStore = create((set) => ({
  cart: [],
  loading: false,
  error: null,
  getCart: (email) => {
    fetch('/api/getcart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email
      })
    })
      .then(response => response.json())
      .then((data) => {
        const { products } = data
        set({ cart: products })
        set({ error: null })
      })
      .catch((err) => {
        set({ error: err })
        toast.error(`Error fetching products: ${err.message}`)
      })
  },
  addProductToCart: async (userName, email, id) => {
    set({ loading: true })
    try {
      const res = await fetch('/api/setcart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userName,
          email,
          id
        })
      })
      if (!res.ok) throw new Error('Error adding product to cart')
      const data = await res.json()
      const { products } = data
      set({ error: null })
      set({ cart: products })
      toast.success('Product added to cart')
    } catch (err) {
      set({ error: err })
      toast.error(`Error adding product to cart: ${err.message}`)
    } finally {
      set({ loading: false })
    }
  },

  deleteItemfromCart: async (idCart, productId) => {
    set({ loading: true })
    try {
      const res = await fetch('/api/deletecartitem', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          idCart,
          productId
        })
      })
      if (!res.ok) throw new Error('Error deleting item from cart')
      const data = await res.json()
      const { products } = data
      set({ cart: products })
      set({ error: null })
      toast.success('Product removed from cart')
    } catch (err) {
      set({ error: err })
      toast.error(`Error deleting item from cart:${err.message}`)
    } finally {
      set({ loading: false })
    }
  },

  createOrderFromCart: (email, amount, userName, cartId) => {
    fetch('/api/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        amount,
        userName,
        cartId
      })
    }).then(res => res.json())
      .then((data) => {
        console.log(data)
      })
  },
  incrementProductCartQty: (idCart, productId) => {
    fetch('/api/inc_itemcart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        idCart,
        productId
      })
    }).then(response => response.json())
      .then((data) => {
        const { products } = data
        set({ cart: products })
      })
  },
  decrementProductCartQty: (idCart, productId) => {
    fetch('/api/dec_itemcart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        idCart,
        productId
      })
    }).then(response => response.json())
      .then((data) => {
        const { products } = data
        set({ cart: products })
      })
  }
}))
