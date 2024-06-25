import React from 'react'
import ProductItem from './ProductItem'

const ProductList = ({ productList }) => {
  const bestRated = productList.sort((a, b) => b.rate - a.rate)
  return (
    <div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-3 gap-y-8'>
      {bestRated.map((product, index) => (
        index <= 7 &&
        <div key={product.id}>
          <ProductItem product={product} />
        </div>
      ))}
    </div>
  )
}

export default ProductList
