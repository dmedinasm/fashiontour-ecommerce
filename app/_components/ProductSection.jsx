import ProductList from './ProductList'
import { getProducts } from '../lib/data'

const ProductSection = async () => {
  const products = await getProducts()
  return (
      <div className='px-10 md:px-20 '>
      <h2 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mt-10 mb-20'>A Sample of Our Products</h2>
      {products ? <ProductList productList={products} /> : <p className='text-2xl text-red-500  '>Error Fetching Data from DataBase</p>}
    </div>
  )
}

export default ProductSection
