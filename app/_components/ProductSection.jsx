import ProductList from './ProductList'
import { getProducts } from '../_services/products'
const ProductSection = async () => {
  const products = await getProducts()
  return (
    <div className='px-10 md:px-20 '>
      <h2 className='font-bold text-[30px] mt-12 mb-4'>A Sample of Our Products</h2>
      {products && <ProductList productList={products} />}
    </div>
  )
}

export default ProductSection
