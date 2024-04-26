import { useEffect, useState } from 'react'
import { useProductStore } from '../_store/productStore'
export function useSingleProduct ({ id }) {
  const [productDetail, setProductDetail] = useState()
  const products = useProductStore(state => state.products)
  useEffect(() => {
    const newProducts = [...products]
    const product = newProducts.find(product => product.id == id)
    setProductDetail(product)
  }, [id])

  return { productDetail }
}
