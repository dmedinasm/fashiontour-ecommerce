'use client'
import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
import GlobalApi from '../_utils/GlobalApi'

const ProductSection = () => {
  const [productList, setProductList] = useState([])
  useEffect(() => {
    getLatestProducts_()
  }, [])

  const getLatestProducts_ = () => {
    GlobalApi.getLatestProducts().then(res => {
      console.log(res)
      setProductList(res)
    })
  }
  return (
    <div className='px-10 md:px-20'>
        {productList && <ProductList productList={productList}/>}
    </div>
  )
}

export default ProductSection
