'use client'
import ProductBanner from '../_components/ProductBanner'
import ProductInfo from '../_components/ProductInfo'
import ProductList from '../../_components/ProductList'
import { usePathname } from 'next/navigation'
import Breadcrumb from '../../_components/Breadcrumb'
import { useSingleProduct } from '../../_hooks/useSingleProduct'
import { useProductsByCategory } from '../../_hooks/useProductsByCategory'
const ProductDetail = ({ params }) => {
  const { productDetail } = useSingleProduct({ id: params?.productId })
  const { similarProducts } = useProductsByCategory({ category: productDetail?.category })
  // Use to get Url path
  const path = usePathname()
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
