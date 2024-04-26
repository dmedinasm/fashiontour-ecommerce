import { create } from 'zustand'
import { getProducts } from '../_services/products'

export const useProductStore = create((set, get) => ({
  products: [],
  getProducts: () => {
    getProducts().then(res => {
      set({ products: res })
    })
  }

  /* rateProduct: () => {
  },
  updateProductStock: () => {
  } */

}))
