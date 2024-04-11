import { useEffect, useState } from 'react'
import { getProductListByCategory } from '../_services/productsByCategory'

export function useProductsByCategory ({ category }) {
  const [similarProducts, setSimilarProducts] = useState([])
  useEffect(() => {
    category && getProductListByCategory(category).then(res => {
      setSimilarProducts(res)
    })
  }, [category])
  return { similarProducts }
}
