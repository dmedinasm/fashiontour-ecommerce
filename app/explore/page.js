import React, { Suspense } from 'react'
import SkeletonProducts from './SkeletonProducts'
import Search from './Search'
import Products from './Products'
async function Explore () {
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
         <Search />
          <Suspense fallback={<SkeletonProducts/>}>
            <Products/>
          </Suspense>

    </section>
  )
}

export default Explore
