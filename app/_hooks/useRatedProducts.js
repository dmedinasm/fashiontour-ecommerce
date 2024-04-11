import { useEffect, useState } from 'react'
import { getMostRatedProducts } from '../_services/mostRatedProducts'
export function useRatedProducts () {
  const [productList, setProductList] = useState([])

  useEffect(() => {
    getMostRatedProducts().then(res => {
      setProductList(res)
    })
  }, [])
  return { productList }
}
