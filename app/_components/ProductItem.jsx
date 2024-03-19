import Image from 'next/image'
import React from 'react'

const ProductItem = ({ product }) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Image src={product.image} alt={product.title} width={200} height={200}
      className='rounded-t-lg h-[200px] object-contain'
       />
       <div className='p-3'>
        <h2 className='text-[14px] font-medium'>{product.title}</h2>
        <h2 className='text-[12px] text-gray-400'>{product.category}</h2>
      </div>
    </div>
  )
}

export default ProductItem
