import Image from 'next/image'
import React from 'react'

const ProductBanner = ({ product }) => {
  return (
    <div className='flex  justify-center p-10 w-full flex-1'>
      {product
        ? <Image src={product?.image} alt='banner' width={380} height={380} className='w-auto h-auto' />
        : <div className='w-auto h-auto bg-slate-200 animate-pulse'>
          </div>}

    </div>
  )
}

export default ProductBanner
