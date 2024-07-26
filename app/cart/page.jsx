'use client'
/* import { Url } from '../_services/fetchParams' */
import { useRouter } from 'next/navigation'
import { useTotalAmount } from '../_hooks/useTotalAmount'
import Image from 'next/image'
import { useCartStore } from '../_store/cartStore'
import { Toaster } from 'sonner'
const Cart = () => {
  const cart = useCartStore(state => state.cart)
  const deleteItemfromCart = useCartStore(state => state.deleteItemfromCart)
  const incrementProductCartQty = useCartStore(state => state.incrementProductCartQty)
  const decrementProductCartQty = useCartStore(state => state.decrementProductCartQty)
  const { totalPrice } = useTotalAmount({ cart })
  const router = useRouter()

  const deleteItem = (idCart, productId) => {
    deleteItemfromCart(idCart, productId)
  }

  const incrementQty = (idCart, productId) => {
    incrementProductCartQty(idCart, productId)
  }
  const decrementQty = (idCart, productId) => {
    decrementProductCartQty(idCart, productId)
  }

  return (
    <section>
      <Toaster richColors position='top-center' />
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <header className="text-center">
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">Your Cart</h1>
          </header>

          <div className="mt-8">
            <ul className="space-y-4">
              {cart.map(item => (
                <li className="flex flex-col xs:flex-row items-center my-12 text-center xs:text-left xs:my-0 gap-4 " key={item.product.id}>
                  <Image
                    src={item.product.image}
                    alt=""
                    className="size-16 rounded object-cover" width={64} height={64}
                  />

                  <div >
                    <h3 className="text-sm font-bold line-clamp-2">{item.product.title}</h3>

                    <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                      <div>
                        <dt className="inline text-gray-950 mr-2">{item.product.category}</dt>
                      </div>

                    </dl>
                  </div>

                  <div className="flex  flex-1 items-center justify-end gap-2">
                    <div className="flex items-center gap-1 ">
                      <button disabled={item.quantity === 1} onClick={() => decrementQty(item.cartId, item.product.id)} className="size-10 leading-10 text-gray-900  transition hover:opacity-75">
                        &minus;
                      </button>
                      <div className=" rounded border border-gray-200 text-center place-items-center px-8 py-2 "
                      >
                        {item.quantity}
                      </div>

                      <button onClick={() => incrementQty(item.cartId, item.product.id)} className="size-10 leading-10 text-gray-900  transition hover:opacity-75">
                        +
                      </button>
                    </div>

                    <div className="flex items-center justify-end gap-2">
                      <div className='font-bold text-sm '>
                        <p className='flex gap-1' ><span>$</span>{(item.product.price * item.quantity).toFixed(2)}</p>
                      </div>
                      <button onClick={() => deleteItem(item.cartId, item.product.id)} className="text-gray-600 transition hover:text-red-600">
                        <span className="sr-only">Remove item</span>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </li>
              ))}

            </ul>

            <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
              <div className="w-screen max-w-lg space-y-4">
                <dl className="space-y-0.5 text-sm text-gray-700">

                  <div className="flex justify-between !text-base font-bold">
                    <dt>Total</dt>
                    <dd> $ {totalPrice}</dd>
                  </div>
                </dl>

                <div className="flex justify-end">
                  <button
                    onClick={() => router.push(`/checkout?amount=${totalPrice}`)}
                    disabled ={totalPrice === 0}
                    className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cart
