import { useEffect } from 'react'
import { useProductStore } from '../_store/productStore'
export function useProducts () {
  const getProducts = useProductStore(state => state.getProducts)
  useEffect(() => {
    getProducts()
  }, [])
}
