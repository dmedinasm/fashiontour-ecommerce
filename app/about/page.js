import Image from 'next/image'
import React from 'react'

function About () {
  return (

    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <Image src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="about image" width={600} height={600} />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl mb-8">Meet the Visionaries Behind Fashion Tour</h2>
            <article className="flex flex-col text-gray-700 gap-4">
              <p>Welcome to Fashion Tour!</p>

              <p>At Fashion Tour, we believe in the power of fashion to express individuality and creativity. Our online store offers a curated selection of the latest trends and timeless classics, ensuring that there&apos;s something for everyone.</p>

              <p>Our mission is simple: to provide high-quality, stylish clothing and accessories that make you feel confident and unique. We work with top designers and brands to bring you a diverse range of products that reflect the latest in fashion.</p>

              <p>Fashion Tour is more than just a shopping destination; it&apos;s a community. We are passionate about building relationships with our customers and offering personalized styling advice to help you create looks that truly represent you. Our dedicated customer service team is always ready to assist you with any questions or needs you may have.</p>

              <p>We are committed to sustainability and ethical fashion. We carefully select our products to ensure they are made with respect for both people and the planet. By choosing Fashion Tour, you&apos;re not only investing in great style but also supporting a more sustainable future.</p>

              <p>Thank you for choosing Fashion Tour as your go-to destination for all things fashion. We&aposre here to help you look and feel your best every day.</p>

              <p>Happy shopping!</p>

              <p>The Fashion Tour Team</p>
            </article>

          </div>
        </div>
      </div>
    </div>
  )
}

export default About
