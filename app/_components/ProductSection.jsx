'use client'
import React, { useEffect } from 'react'
import ProductList from './ProductList'
import GlobalApi from '../_utils/GlobalApi'

const ProductSection = () => {
  useEffect(() => {
    getLatestProducts_()
  }, [])

  const getLatestProducts_ = () => {
    GlobalApi.getLatestProducts().then(res => {
      console.log(res)
    })
  }
  return (
    <div>
        <ProductList/>
    </div>
  )
}

export default ProductSection
