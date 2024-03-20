import Image from 'next/image'
import React from 'react'

const ProductBanner = ({ product }) => {
  return (
    <div className='flex justify-center'>
        <Image src={product?.image} alt='banner' width={350} height={400} />
    </div>
  )
}

export default ProductBanner
