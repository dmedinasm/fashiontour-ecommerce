import { ShoppingCart } from 'lucide-react'
import React from 'react'
import SkeltonEffect from './SkeltonEffect'

const ProductInfo = ({ product }) => {
  return (
    <div >
      {product
        ? <div>
          <h2 className='text-[20px] '>{product?.title}</h2>
          <h2 className='text-[15px] text-gray-500'>{product?.category}</h2>
          <h2 className='text-[15px] text-gray-700 mt-5'>{product?.description}</h2>
          <h2 className='text-[30px] text-primary font-medium mt-5'>${product?.price}</h2>
          <button className='flex gap-2 py-3 hover:bg-blue-700 px-10 text-white bg-primary rounded-lg mt-5'>
            <ShoppingCart />
            Add to Cart
          </button>
        </div>
        : <SkeltonEffect/>
      }

        </div>

  )
}

export default ProductInfo
