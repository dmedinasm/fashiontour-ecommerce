import { ShoppingCart } from 'lucide-react'
import SkeltonEffect from './SkeltonEffect'
import { useRouter } from 'next/navigation'
import { useUser } from '@clerk/nextjs'
import GlobalApi from '../../_utils/GlobalApi'
import { useContext } from 'react'
import { CartContext } from '../../_context/CartContext'

const ProductInfo = ({ product }) => {
  const { user } = useUser()
  const router = useRouter()
  const { setChangedCart } = useContext(CartContext)
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

      GlobalApi.addToCart(data).then(resp => {
        console.log(resp)
        setChangedCart(resp)
      }, (error) => {
        console.log('Error', error)
      })
    }
  }
  return (
    <div >
      {product
        ? <div>
          <h2 className='text-[20px] '>{product?.title}</h2>
          <h2 className='text-[15px] text-gray-500'>{product?.category}</h2>
          <h2 className='text-[15px] text-gray-700 mt-5'>{product?.description}</h2>
          <h2 className='text-[30px] text-primary font-medium mt-5'>${product?.price}</h2>
          <button className='flex gap-2 py-3 hover:bg-blue-700 px-10 text-white bg-primary rounded-lg mt-5'
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
