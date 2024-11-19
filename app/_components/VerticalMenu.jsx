import React from 'react'
import Link from 'next/link'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../lib/firebase'
function VerticalMenu ({ isOpen, toggle }) {
  const [user] = useAuthState(auth)
  return (
    <div className={`absolute top-12 left-0 w-full bg-white border border-gray-200  mt-2 p-4 rounded-lg shadow-lg transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 invisible'} sm:hidden z-10`}>
      <ul className="space-y-1" onClick={() => toggle(!isOpen) }>
        <li>
          <Link href={'/'} className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
            Home
          </Link>
        </li>

        <li>
          <Link
            href="/explore"
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            Explore
          </Link>
        </li>

        <li>
          <Link
            href={'/about'}
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            About Us
          </Link>
        </li>

        <li>
          <Link
            href={'/contact'}
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            Contact Us
          </Link>
        </li>
        <li className={user ? 'hidden' : 'block ss:hidden'}>
          <a
            href='/sign-in'
            className="block rounded-lg px-4 py-2 text-sm font-bold text-black hover:bg-gray-100  hover:text-gray-700"
          >
            Login
          </a>
        </li>
        <li className={user ? 'hidden' : 'block ss:hidden'}>
          <a
            href='/sign-up'
            className="block rounded-lg px-4 py-2 text-sm font-bold text-black hover:bg-gray-100 hover:text-gray-700"
          >
            Register
          </a>
        </li>
      </ul>
    </div>
  )
}

export default VerticalMenu
