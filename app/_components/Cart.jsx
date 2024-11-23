import Image from 'next/image'
import Link from 'next/link'
import { getCartProducts } from '../lib/data'
import { auth } from '../lib/firebase'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { useCartStore } from '../_store/cartStore'
import { useEffect } from 'react'

const Cart = () => {
  const { getCart } = useCartStore()
  const { queryOrder } = getCartProducts(auth.currentUser.email)
  const [cart, loading] = useCollectionData(queryOrder, { idField: 'id' })

  useEffect(() => {
    getCart(cart)
  }, [cart])// eslint-disable-line

  return (

      <div className="h-[300px] w-[250px] bg-gray-100 rounded-md absolute mx-10 z-10   -right-2 top-6 p-5 border drop-shadow-md overflow-auto">
      <div className="mt-4 space-y-6">
        { loading
          ? <h3 className='text-center'>Loading...</h3>
          : <ul className="space-y-4">
          {cart.map((item) => (
            <li key={item.cartProductId} className="flex items-center gap-4">
              <Image
                src={item.cartProductImage}
                alt=""
                width={64}
                height={64}
                className="rounded object-cover"
              />

              <div>
                <h3 className="text-sm text-gray-900 line-clamp-1">
                  {item.cartProductTitle}
                </h3>

                <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                  <div>
                    <dt className="inline">{item.cartProductCategory}</dt>
                  </div>

                  <div>
                    <dt className="inline">$ {item.cartProductPrice}</dt>
                  </div>
                </dl>
              </div>
            </li>
          ))}
        </ul>

        }
      </div>
      <div className="space-y-4 text-center">
        <Link
          href={'/cart/'}
          className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600 mt-10"
        >
          View my cart ({cart?.length})
        </Link>

        <Link
          href="/explore"
          className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
        >
          Continue shopping
        </Link>
      </div>
    </div>
  )
}
export default Cart
