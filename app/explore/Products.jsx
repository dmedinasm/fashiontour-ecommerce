import React from 'react'
import ProductItem from '../_components/ProductItem'
import { getProducts } from '../_services/products'

async function Products ({ query }) {
  const products = await getProducts()
  /* const searchedProducts = products.filter(product => product.title.toLowerCase().includes(query) || product.title.toUpperCase().includes(query)) */
  const searchedProducts = products.filter(product => product.title.toLowerCase().includes(query.toLowerCase()))
  console.log(searchedProducts)
  return (
    <>
      <div className='mt-4 grid ss:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 p-10'>
            {searchedProducts?.map(product =>
            <ProductItem key={product.id} product={product}/>
            )}
      </div>
    </>

  )
}

export default Products
