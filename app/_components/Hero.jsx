import Image from 'next/image'
import Link from 'next/link'
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
      Browse our catalog and discover everything you are looking for.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:text-blue-700 sm:w-auto"
          href="/explore"
        >
          Get Started
        </Link>

        <Link
          className="block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow hover:text-blue-700 focus:outline-none focus:ring active:text-blue-700 sm:w-auto"
          href="/about"
        >
          Learn More
        </Link>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero
