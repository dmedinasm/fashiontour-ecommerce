import React, { useContext } from 'react'
import { CartContext } from '../_context/CartContext'
import GlobalApi from '../_utils/GlobalApi'

const Cart = () => {
  const { cart, setAddToCart } = useContext(CartContext)
  return (
    <div className='h-[300px] w-[250px] bg-gray-100 rounded-md absolute mx-10 z-10 right-10 top-12 p-5 border drop-shadow-md overflow-auto'>
         <div class="mt-4 space-y-6">
    <ul class="space-y-4">
        {
            cart.map((item, index) =>
                <li key={index} class="flex items-center gap-4">
        <img
          src={`${GlobalApi.Url}${item.attributes.products.data[0].attributes.image.data.attributes.url}`}
          alt=""
          class="size-16 rounded object-cover"
        />

        <div>
          <h3 class="text-sm text-gray-900">{item.attributes.products.data[0].attributes.title}</h3>

          <dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
            <div>
              <dt class="inline">Size:</dt>
              <dd class="inline">XXS</dd>
            </div>

            <div>
              <dt class="inline">Color:</dt>
              <dd class="inline">White</dd>
            </div>
          </dl>
        </div>
      </li>
            )
        }

      </ul>
      </div>
      <div class="space-y-4 text-center">

      <a
        href="#"
        class="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600 mt-10"
      >
        View my cart ({cart?.length})
      </a>

      <a
        href="#"
        class="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
      >
        Continue shopping
      </a>
    </div>
    </div>
  )
}

export default Cart
