import { ChevronRightSquare } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductItem = ({ product }) => {
  return (

     <Link href={`/product-detail/${product.id}`}>
    <div className='flex flex-col justify-center items-center  hover:shadow-xl cursor-pointer border  w-full rounded-md'>
        <Image src={product.image} alt={product.title} width={200} height={200}
          className='rounded-t-lg h-[200px] object-contain'
        />
        <div className='flex-col justify-between items-center bg-gray-100 p-4 mt-3 rounded-md w-full h-32  '>
          <h2 className='text-[14px] font-medium line-clamp-1'>{product.title}</h2>
          {product?.category && <h2 className='text-[12px] text-gray-500 flex gap-2'><ChevronRightSquare className='h-4 w-4' />{product.category}</h2>}
          <h2 className='font-medium mt-3'>${product.price}</h2>
        </div>
        </div>
    </Link>

  )
}

export default ProductItem
