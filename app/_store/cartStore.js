import { create } from 'zustand'
import { toast } from 'sonner'

export const useCartStore = create((set, get) => ({
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
    /* deleteCartItem(id)
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
      .finally(() => set({ loading: false })) */

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
    /* const cartItems = get().cart
    createOrder(data).then(() => {
      cartItems.forEach(element => {
        deleteCartItem(element.id).then(res => {
          console.log(res)
        })
      })
      set({ cart: [] })
    }) */
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
    /* const cartItems = get().cart
    const newCartItems = cartItems.map(element => {
      if (element.id === id) {
        return { ...element, productCartQty: element.attributes.products.data[0].attributes.quantity === element.productCartQty ? element.attributes.products.data[0].attributes.quantity : element.productCartQty + 1 }
      } else {
        return element
      }
    })
    set({ cart: newCartItems }) */
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
    /* const cartItems = get().cart
    const newCartItems = cartItems.map(element => {
      if (element.id === id) {
        return { ...element, productCartQty: element.productCartQty === 1 ? 1 : element.productCartQty - 1 }
      } else {
        return element
      }
    })
    set({ cart: newCartItems }) */
  }
}))
