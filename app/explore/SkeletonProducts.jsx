import React from 'react'
import ProductSkeleton from '../_components/ProductSkelton'
function SkeletonProducts () {
  return (
    <div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-3 gap-y-8 mt-10 mx-8'>
    {[...Array(20)].map((_, index) => <ProductSkeleton key={index} />)}
  </div>
  )
}

export default SkeletonProducts
