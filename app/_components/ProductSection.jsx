'use client'
import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
import GlobalApi from '../_utils/GlobalApi'

const ProductSection = () => {
  const [productList, setProductList] = useState([])
  useEffect(() => {
    getRatedProducts_()
  }, [])

  const getRatedProducts_ = () => {
    GlobalApi.getMostRatedProducts().then(res => {
      const data = res.map(product => {
        const title = product.attributes.title
        const category = product.attributes.category
        const description = product.attributes.description
        const price = product.attributes.price
        const image = `http://localhost:1337${product.attributes.image.data.attributes.url}`
        const id = product.id
        return { title, category, description, price, image, id }
      })
      setProductList(data)
    })
  }
  return (
    <div className='px-10 md:px-20 '>
      <h2 className='font-bold text-[20px] mt-12 mb-4'>Best Rated Products</h2>
      {productList && <ProductList productList={productList} />}
    </div>
  )
}

export default ProductSection
