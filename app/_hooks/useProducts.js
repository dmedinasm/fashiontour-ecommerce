import { useEffect, useState } from 'react'
import { getProducts } from '../_services/products'
export function useProducts () {
  const [productList, setProductList] = useState([])

  useEffect(() => {
    getProducts().then(res => {
      setProductList(res)
    })
  }, [])
  return { productList }
}
