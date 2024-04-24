import { ShoppingCart } from 'lucide-react'
import SkeltonEffect from './SkeltonEffect'
import { useRouter } from 'next/navigation'
import { useUser } from '@clerk/nextjs'
import { useCartStore } from '../../_store/cartStore'
const ProductInfo = ({ product }) => {
  const { user } = useUser()
  const router = useRouter()
  const cart = useCartStore(state => state.cart)
  console.log(cart)
  const addProductToCart = useCartStore(state => state.addProductToCart)
  const onAddToCartClick = () => {
    if (!user) {
      router.push('/sign-in')
    } else {
      // Logic to Add to Cart
      const data = {
        data: {
          userName: user.fullName,
          email: user.primaryEmailAddress.emailAddress,
          products: product?.id
        }
      }
      addProductToCart(data)
    }
  }
  return (
    <div >
      {product
        ? <div>
          <h2 className='text-[20px] '>{product?.title}</h2>
          <h2 className='text-[15px] text-gray-500'>{product?.category}</h2>
          <h2 className='text-[15px] text-gray-700 mt-5'>{product?.description}</h2>
          {product?.qty > 0
            ? <span className="whitespace-nowrap rounded-full bg-green-100 px-2.5 py-0.5 text-md inline-block  text-green-700 mt-5 border-[2px] border-green-300 border-solid"> In Stock </span>
            : <span className="whitespace-nowrap rounded-full bg-red-100 px-2.5 py-0.5 text-md inline-block  text-red-700 mt-5 border-[2px] border-red-300 border-solid"> Out of Stock </span>
          }
          <h2 className='text-[30px] text-primary font-medium mt-5'>${product?.price}</h2>
          <button className='flex gap-2 py-3 hover:bg-blue-700 cursor-pointer px-10 text-white bg-primary rounded-lg mt-5'
          disabled = {product.qty === 0 || cart.some(item => item.attributes.products.data[0].id === product.id)}
          onClick={() => onAddToCartClick()}>
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
