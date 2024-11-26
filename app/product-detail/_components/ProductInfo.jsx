'use client'
import { ShoppingCart } from 'lucide-react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../lib/firebase'
import { useCartStore } from '../../_store/cartStore'
import { Toaster } from 'sonner'
import { useRouter } from 'next/navigation'
import { addProductToCart } from '../../lib/data'
import ErrorNotification from '../../_components/ErrorNotification'
const ProductInfo = ({ product }) => {
  const [user] = useAuthState(auth)
  const route = useRouter()
  const isTryLogin = useCartStore(state => state.isTryLogin)
  const { isOpenCart, cart } = useCartStore()
  const onAddToCartClick = (event) => {
    if (!user) {
      route.push('/sign-in')
      isTryLogin(true)
    } else {
      event.target.disabled = true
      addProductToCart(
        auth.currentUser.displayName,
        auth.currentUser.email,
        product.id,
        product.title,
        product.image,
        product.category,
        product.price
      )
      isOpenCart(true)
      event.target.disabled = false
    }
  }
  return (

     <div >
      <Toaster richColors position='top-center' />
      {product
        ? <div>
          <h2 className='text-[20px] '>{product?.title}</h2>
          <h2 className='text-[15px] text-gray-500'>{product?.category}</h2>
          <h2 className='text-[15px] text-gray-700 mt-5'>{product?.description}</h2>
          {product?.quantity > 0
            ? <span className="whitespace-nowrap rounded-full bg-green-100 px-2.5 py-0.5 text-md inline-block  text-green-700 mt-5 border-[2px] border-green-300 border-solid"> In Stock </span>
            : <span className="whitespace-nowrap rounded-full bg-red-100 px-2.5 py-0.5 text-md inline-block  text-red-700 mt-5 border-[2px] border-red-300 border-solid"> Out of Stock </span>
          }
          <h2 className='text-[30px] text-primary font-medium mt-5'>${product?.price}</h2>
          <button className='flex gap-2 py-3 hover:bg-blue-700 cursor-pointer px-10 text-white bg-primary rounded-lg mt-5'
            disabled={!user ? false : (product.quantity === 0 || cart?.some(item => item.cartProductId === product.id)) }
            onClick={(event) => onAddToCartClick(event)}>
            <ShoppingCart />
            Add to Cart
          </button>
        </div>
        : <ErrorNotification/>
    }

    </div>

  )
}

export default ProductInfo
