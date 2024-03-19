import React from 'react'
import ProductItem from './ProductItem'

const ProductList = ({ productList }) => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-8'>
      {productList.map((product) => (
        <div key={product.id}>
          <ProductItem product={product}/>
        </div>
      ))}
    </div>
  )
}

export default ProductList
