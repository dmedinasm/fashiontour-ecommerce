import React from 'react'
import ProductSkeleton from './ProductSkelton'
const ProductListSkeleton = () => {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-3 gap-y-8">
      {[...Array(8)].map((_, index) => (
        <ProductSkeleton key={index} />
      ))}
    </div>
  )
}

export default ProductListSkeleton
