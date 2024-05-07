/* 'use client' */
import ProductList from './ProductList'
/* import { useProducts } from '../_hooks/useProducts'
import { useProductStore } from '../_store/productStore' */
import { getProducts } from '../_services/products'
const ProductSection = async () => {
  /* useProducts()
  const products = useProductStore(state => state.products) */
  const products = await getProducts()
  return (
    <div className='px-10 md:px-20 '>
      <h2 className='font-bold text-[20px] mt-12 mb-4'>Best Rated Products</h2>
      {products && <ProductList productList={products} />}
    </div>
  )
}

export default ProductSection
