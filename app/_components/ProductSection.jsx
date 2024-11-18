'use client'
import ProductList from './ProductList'
import { getProducts } from '../lib/data'
import { useCollection } from 'react-firebase-hooks/firestore'
import ErrorNotification from '../_components/ErrorNotification'
import ProductListSkeleton from './ProductListSkeleton'
const ProductSection = () => {
  const { queryOrder } = getProducts()
  const [snapshot, loading, error] = useCollection(queryOrder)
  const products = snapshot?.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }))

  return (

    loading
      ? <ProductListSkeleton/>
      : <div className='px-10 md:px-20 '>
        <h2 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mt-10 mb-20'>A Sample of Our Products</h2>
        {error
          ? <ErrorNotification />
          : products && <ProductList productList={products} />
           }
      </div>

  )
}

export default ProductSection
