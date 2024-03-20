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
    GlobalApi.getMostRatedProducts().then(res => {
      console.log(res)
      setProductList(res)
    })
  }
  return (
    <div className='px-10 md:px-20 '>
      <h2 className='font-bold text-[20px] mt-12 mb-4'>Most Rated Products</h2>
      {productList && <ProductList productList={productList} />}
    </div>
  )
}

export default ProductSection
