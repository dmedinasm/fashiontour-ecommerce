'use client'

import GlobalApi from '../../_utils/GlobalApi'
import React, { useEffect, useState } from 'react'
import ProductBanner from '../_components/ProductBanner'
import ProductInfo from '../_components/ProductInfo'
import ProductList from '../../_components/ProductList'
import { usePathname } from 'next/navigation'
import Breadcrumb from '../../_components/Breadcrumb'

const ProductDetail = ({ params }) => {
  // Use to get Url path
  const path = usePathname()
  const [productDetail, setProductDetail] = useState()
  const [similarProducts, setSimilarProducts] = useState([])
  useEffect(() => {
    params?.productId && getProductById_()
  }, [params?.productId])

  useEffect(() => {
    productDetail?.category && getProductByCategory_()
  }, [productDetail?.category])
  const getProductById_ = () => {
    GlobalApi.getProductById(params?.productId).then(res => {
      console.log(res)
      setProductDetail(res)
    })
  }

  const getProductByCategory_ = () => {
    GlobalApi.getProductListByCategory(productDetail?.category).then(res => {
      console.log(res)
      setSimilarProducts(res)
    })
  }
  return (
    <div>
      <div className='py-12 px-10 sm:px-28'>
        <Breadcrumb path={path} />
        <div className='grid grid-cols-1 mt-10 ss:grid-cols-2 gap-10 ss:gap-0'>
          <ProductBanner product={productDetail} />
          <ProductInfo product={productDetail} />
        </div>

          {similarProducts &&
          <div className='mt-24'>
            <h2 className='text-[20px] font-bold mt-10 mb-5'>Similar Products</h2>
            <ProductList productList={similarProducts} />
          </div>
          }

      </div>

    </div>
  )
}

export default ProductDetail
