/* 'use client' */
import ProductBanner from '../_components/ProductBanner'
import ProductInfo from '../_components/ProductInfo'
import ProductList from '../../_components/ProductList'
/* import { usePathname } from 'next/navigation' */
import Breadcrumb from '../../_components/Breadcrumb'
import { getProductById, getProductByCategory } from '../../lib/data'
const ProductDetail = async ({ params }) => {
  const productDetail = await getProductById(params?.productId)
  const similarProducts = await getProductByCategory(productDetail?.category)

  return (
    <div>
      <div className='py-12 px-10 sm:px-28'>
        <Breadcrumb/>
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
