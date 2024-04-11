'use client'
import { UserButton, useUser } from '@clerk/nextjs'// Return the current user auth state
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../_context/CartContext'
import GlobalApi from '../_utils/GlobalApi'
import Cart from './Cart'
import Link from 'next/link'
const Header = () => {
  const [isTryLogin, setIsTryLogin] = useState()
  const { user } = useUser()
  const { changedCart } = useContext(CartContext)
  const { cart, setAddToCart } = useContext(CartContext)
  const [openCart, setOpenCart] = useState(false)
  const getCartItems = () => {
    GlobalApi.getUserCartItems(user.primaryEmailAddress.emailAddress).then(res => {
      setAddToCart(res)
    })
  }

  useEffect(() => {
    user && getCartItems()
  }, [user, changedCart])

  useEffect(() => {
    openCart === false &&
    setOpenCart(true)
  }, [cart])

  useEffect(() => {
    setIsTryLogin(window.location.href.toString().includes('sign-in') || window.location.href.toString().includes('sign-up'))
  }, [])

  return !isTryLogin && (
    <header className="bg-white shadow-sm">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
     <Image src='/logo.svg' alt="logo main" width={80} height={90}/>

      <div className="hidden md:block">
        <nav aria-label="Global">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <Link className="text-gray-500 transition hover:text-gray-500/75" href={'/'}> Home </Link>
            </li>

            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Explore </a>
            </li>

            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> About Us </a>
            </li>

            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Contact Us </a>
            </li>

            <li>

            </li>
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        {!user
          ? <div className="sm:flex sm:gap-4">
          <a
          className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-blue-600"
            href="/sign-in"
          >
            Login
          </a>

          <div className="hidden sm:flex">
            <a
              className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-primary hover:text-blue-400"
              href="/sign-up"
            >
              Register
            </a>
          </div>
        </div>
          : <div className='flex items-center gap-5'>
                <h2 className='flex gap-1 cursor-pointer' onClick={() => setOpenCart(!openCart)}><ShoppingCart />({cart?.length})</h2>
                <UserButton />
            </div>
        }

        {openCart && <Cart cart={cart}/>}

        <div className="block md:hidden">
          <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</header>
  )
}

export default Header
