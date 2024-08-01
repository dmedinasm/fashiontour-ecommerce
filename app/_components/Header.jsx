'use client'
import { UserButton, useUser } from '@clerk/nextjs'// Return the current user auth state
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import Cart from './Cart'
import Link from 'next/link'
import { useTryLogin } from '../_hooks/useTryLogin'
import { useUserCartItems } from '../_hooks/useUserCartItems'
import { useOpenCart } from '../_hooks/useOpenCart'
import { useCartStore } from '../_store/cartStore'
import VerticalMenu from '../_components/VerticalMenu'
import Hamburger from '../_components/Hamburger'

const Header = () => {
  const { isTryLogin } = useTryLogin()
  const [openMenu, setOpenMenu] = useState(false)
  const { isSignedIn, user } = useUser()
  const cart = useCartStore((state) => state.cart)

  useUserCartItems({ email: user?.primaryEmailAddress?.emailAddress, isSignedIn })
  const { openCart, setOpenCart } = useOpenCart()

  return !isTryLogin && (
    <header className="bg-white shadow-sm">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
     <Link href="/"><Image src='/logo.png' alt="logo main" width={50} height={50} className='w-auto h-auto'/></Link>

      <div className="hidden sm:block">
        <nav aria-label="Global">
          <ul className="flex items-center gap-6 text-md">
            <li>
              <Link className="text-gray-500 transition hover:text-gray-500/75" href={'/'}> Home </Link>
            </li>

            <li>
              <Link className="text-gray-500 transition hover:text-gray-500/75" href={'/explore'}> Explore </Link>
            </li>

            <li>
              <Link className="text-gray-500 transition hover:text-gray-500/75" href={'/about'}> About Us </Link>
            </li>

            <li>
              <Link className="text-gray-500 transition hover:text-gray-500/75" href={'/contact'}> Contact Us </Link>
            </li>

            <li>

            </li>
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        {!isSignedIn
          ? <div className="hidden ss:flex ss:gap-4">
          <a
          className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-blue-600"
            href="/sign-in"
          >
            Login
          </a>

          <div className="hidden ss:flex">
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

        <div className="block sm:hidden">
          <button className="rounded relative w-10 h-10  bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75" onClick={() => setOpenMenu(!openMenu)}>
          <Hamburger isOpen={openMenu} />
          </button>
        </div>
        {<VerticalMenu isOpen={openMenu} toggle={setOpenMenu}/>}
      </div>
    </div>
  </div>
</header>
  )
}

export default Header
