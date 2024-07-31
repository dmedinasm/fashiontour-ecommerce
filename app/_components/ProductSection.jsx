import ProductList from './ProductList'
import { getProducts } from '../lib/data'
import ErrorNotification from '../_components/ErrorNotification'

const ProductSection = async () => {
  const products = await getProducts()
  return (
     <div className='px-10 md:px-20 '>
      <h2 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mt-10 mb-20'>A Sample of Our Products</h2>
      {products
        ? <ProductList productList={products}/>
        : <ErrorNotification/>}
    </div>
  )
}

export default ProductSection
