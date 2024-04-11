import { useEffect, useState } from 'react'
import { getProductById } from '../_services/singleProduct'

export function useSingleProduct ({ id }) {
  const [productDetail, setProductDetail] = useState()
  useEffect(() => {
    id && getProductById(id).then(res => {
      setProductDetail(res)
    })
  }, [id])
  return { productDetail }
}
