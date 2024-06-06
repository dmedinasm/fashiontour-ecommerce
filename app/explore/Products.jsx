import React from 'react'
import ProductItem from '../_components/ProductItem'
import { getProducts } from '../_services/products'
async function Products () {
  const products = await getProducts()
  return (
      <div className='mt-10 grid ss:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 p-10'>
            {products.map(product =>
            <ProductItem key={product.id} product={product}/>
            )}
          </div>
  )
}

export default Products
