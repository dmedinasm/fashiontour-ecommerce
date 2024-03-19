import React from 'react'
import ProductItem from './ProductItem'

const ProductList = ({ productList }) => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3'>
      {productList.map((product) => (
        <div key={product.id}>
          <ProductItem product={product}/>
        </div>
      ))}
    </div>
  )
}

export default ProductList
