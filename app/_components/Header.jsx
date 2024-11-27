'use client'
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import Cart from './Cart'
import Link from 'next/link'
import { useOpenCart } from '../_hooks/useOpenCart'
import { useCartStore } from '../_store/cartStore'
import VerticalMenu from '../_components/VerticalMenu'
import Hamburger from '../_components/Hamburger'
import { auth } from '../lib/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRouter } from 'next/navigation'

const Header = () => {
  const [user, loading] = useAuthState(auth)
  const { openCart, isOpenCart } = useCartStore()
  const route = useRouter()
  const [openMenu, setOpenMenu] = useState(false)
  const { cart } = useCartStore()
  const { tryLogin, isTryLogin } = useCartStore()
  useOpenCart()

  const handleLogin = () => {
    route.push('/sign-in')
    isTryLogin(true)
  }

  return !tryLogin && (
    <header className='bg-white shadow-sm'>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center  justify-between">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo main"
              width={50}
              height={50}
              className="w-auto h-auto"
            />
          </Link>

          <div className="ml-8 hidden sm:block grow">
            <nav aria-label="Global">
              <ul className="flex  items-center gap-6 text-md">
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href={'/'}
                  >
                    {' '}
                    Home{' '}
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href={'/explore'}
                  >
                    {' '}
                    Explore{' '}
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href={'/about'}
                  >
                    {' '}
                    About Us{' '}
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href={'/contact'}
                  >
                    {' '}
                    Contact Us{' '}
                  </Link>
                </li>

                <li></li>
              </ul>
            </nav>
          </div>

          <div className="flex w-fit items-center gap-4">
            {loading
              ? (
              <div className=" w-10 h-10 rounded-full object-cover object-center my-0.5 mx-1.5 bg-slate-200 animate-pulse" ></div>
                )
              : !user
                  ? (
              <div className="hidden ss:flex ss:gap-4">
                <button
                  className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-blue-600"
                  onClick={handleLogin}
                >
                  Sign In
                </button>
              </div>
                    )
                  : (
              <div className="flex items-center gap-5">
                <h2
                  className="flex relative gap-1 cursor-pointer"
                  onClick={() => isOpenCart(!openCart)}
                >
                  <ShoppingCart />({<span>{cart?.length}</span> || <span>...</span>} )
                  {openCart && <Cart />}
                </h2>
                <button
                  className="hidden ss:block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-blue-600"
                  onClick={() => auth.signOut()}
                >
                  Sign Out
                </button>
                <Image
                  src={auth.currentUser.photoURL}
                  alt="avatar img"
                  width={30}
                  height={30}
                  className="rounded-full object-cover object-center my-0.5 mx-1.5"
                />

              </div>
                    )}

            <div className="block sm:hidden">
              <button
                className="rounded relative w-10 h-10  bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                onClick={() => setOpenMenu(!openMenu)}
              >
                <Hamburger isOpen={openMenu} />
              </button>
            </div>
            {<VerticalMenu isOpen={openMenu} toggle={setOpenMenu} />}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
