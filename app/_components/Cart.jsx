import GlobalApi from '../_utils/GlobalApi'

const Cart = ({ cart }) => {
  console.log(cart)
  return (
    <div className='h-[300px] w-[250px] bg-gray-100 rounded-md absolute mx-10 z-10 right-10 top-12 p-5 border drop-shadow-md overflow-auto'>
         <div class="mt-4 space-y-6">
    <ul class="space-y-4">
        {
          cart.map((item) =>
                <li key={item.id} class="flex items-center gap-4">
        <img
          src={`${GlobalApi.Url}${item.attributes.products.data[0].attributes.image.data.attributes.url}`}
          alt=""
          class="size-16 rounded object-cover"
        />

        <div>
          <h3 class="text-sm text-gray-900 line-clamp-1">{item.attributes.products.data[0].attributes.title}</h3>

          <dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
            <div>
              <dt class="inline">{item.attributes.products.data[0].attributes.category}</dt>
            </div>

            <div>
              <dt class="inline">$ {item.attributes.products.data[0].attributes.price}</dt>
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
