'use client'
import ProductList from './ProductList'
import { useProducts } from '../_hooks/useProducts'
const ProductSection = () => {
  const { productList } = useProducts()

  return (
    <div className='px-10 md:px-20 '>
      <h2 className='font-bold text-[20px] mt-12 mb-4'>Best Rated Products</h2>
      {productList && <ProductList productList={productList} />}
    </div>
  )
}

export default ProductSection
