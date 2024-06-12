import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className="bg-gray-50 flex flex-col items-center justify-center">
        <Image src='/logo.png' alt='logo hero' width={200} height={200} className='mt-28' />
  <div className="mx-auto max-w-screen-xl px-4 py-14 lg:flex lg:h-screen ">

    <div className="mx-auto max-w-xl text-center">

      <h1 className="text-3xl font-extrabold sm:text-5xl">
        <span className="text-primary">Fashion Tour</span> A Marketplace
        for Fashion Lovers
        <strong className="font-extrabold text-primary sm:block"> Discover unique products</strong>
      </h1>

      <p className="mt-4 sm:text-xl/relaxed">
       Now get free discount code  for all of our products.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
          href="#"
        >
          Get Started
        </a>

        <a
          className="block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow hover:text-blue-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
          href="#"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero
