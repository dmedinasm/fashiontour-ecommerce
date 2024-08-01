import Image from 'next/image'
import Link from 'next/link'
import ErrorNotification from './ErrorNotification'

const Cart = ({ cart }) => {
  return (
    <div className="h-[300px] w-[250px] bg-gray-100 rounded-md absolute mx-10 z-10 right-10 top-12 p-5 border drop-shadow-md overflow-auto">
      <div className="mt-4 space-y-6">
        { cart
          ? <ul className="space-y-4">
          {cart.map((item) => (
            <li key={item.product.id} className="flex items-center gap-4">
              <Image
                src={item.product.image}
                alt=""
                width={64}
                height={64}
                className="rounded object-cover"
              />

              <div>
                <h3 className="text-sm text-gray-900 line-clamp-1">
                  {item.product.title}
                </h3>

                <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                  <div>
                    <dt className="inline">{item.product.category}</dt>
                  </div>

                  <div>
                    <dt className="inline">$ {item.product.price}</dt>
                  </div>
                </dl>
              </div>
            </li>
          ))}
        </ul>
          : <ErrorNotification/>
        }
      </div>
      <div className="space-y-4 text-center">
        <Link
          href={'/cart'}
          className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600 mt-10"
        >
          View my cart ({cart?.length})
        </Link>

        <a
          href="#"
          className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
        >
          Continue shopping
        </a>
      </div>
    </div>
  )
}

export default Cart
