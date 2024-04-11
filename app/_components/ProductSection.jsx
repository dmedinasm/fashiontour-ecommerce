'use client'
import ProductList from './ProductList'
import { useRatedProducts } from '../_hooks/useRatedProducts'
const ProductSection = () => {
  const { productList } = useRatedProducts()

  return (
    <div className='px-10 md:px-20 '>
      <h2 className='font-bold text-[20px] mt-12 mb-4'>Best Rated Products</h2>
      {productList && <ProductList productList={productList} />}
    </div>
  )
}

export default ProductSection
