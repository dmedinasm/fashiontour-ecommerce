import React from 'react'
import { getProducts } from '../_services/products'
import ProductItem from '../_components/ProductItem'

async function Explore () {
  const products = await getProducts()
  return (
    <section className='my-10' >
        <h2 className='w-full text-gray-700 ss:text-center text-2xl font-semibold'>Explore Our Products</h2>
        <nav className='ss:flex ss:justify-center ss:items-center mt-4'>
        <div className="flex flex-col ss:flex-row ">
                    <a className="mt-3 text-gray-600 hover:text-gray-400 ss:mx-3 ss:mt-0" href="#">Electronics</a>
                    <a className="mt-3 text-gray-600 hover:text-gray-400 ss:mx-3 ss:mt-0" href="#">Men`s clothing</a>
                    <a className="mt-3 text-gray-600 hover:text-gray-400 sm:mx-3 ss:mt-0" href="#">Jewelery</a>
                    <a className="mt-3 text-gray-600 hover:text-gray-400 ss:mx-3 ss:mt-0" href="#">Women`s clothing</a>
                </div>
        </nav>
          <div className="relative mt-6 max-w-lg mx-auto">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <svg className="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none">
                      <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
              </span>
              <input className="w-full border rounded-md pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none focus:shadow-outline" type="text" placeholder="Search"></input>
          </div>
          <div className='mt-10 grid ss:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 p-10'>
            {products.map(product =>
            <ProductItem key={product.id} product={product}/>
            )}
          </div>
    </section>
  )
}

export default Explore
