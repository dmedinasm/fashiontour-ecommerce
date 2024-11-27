import Image from 'next/image'
import React from 'react'

const ProductBanner = ({ product }) => {
  return (
    <div className='flex justify-center p-10 w-full'>
      {product
        ? <Image src={product?.image} alt='banner' width={350} height={400} />
        : <div className='w-auto h-auto bg-slate-200 animate-pulse'>
          </div>}

    </div>
  )
}

export default ProductBanner
