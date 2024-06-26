import React from 'react'
import ProductItem from '../_components/ProductItem'
import { getProducts } from '../_services/products'

async function Products ({ query }) {
  const products = await getProducts()
  const searchedProducts = products.filter(product =>
    product.title.toLowerCase().includes(query.toLowerCase()) ||
    product.category.toLowerCase().includes(query.toLowerCase())
  )
  return (
    <>
      { searchedProducts.length > 0
        ? <div className='mt-4 grid ss:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 p-10'>
            {searchedProducts?.map(product =>
            <ProductItem key={product.id} product={product}/>
            )}
      </div>
        : <div className="flex flex-col items-center justify-center my-20 text-gray-500">
          <h2 className="text-2xl font-bold text-gray-800">No products to show</h2>
          <p className="mt-4 text-lg">It seems there are no products that match your search.</p>
        </div>
      }
    </>

  )
}

export default Products
