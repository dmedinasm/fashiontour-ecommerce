import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <header class="bg-white shadow-sm">
  <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div class="flex h-16 items-center justify-between">
     <Image src='/logo.svg' alt="logo main" width={80} height={90}/>

      <div class="hidden md:block">
        <nav aria-label="Global">
          <ul class="flex items-center gap-6 text-sm">
            <li>
              <a class="text-gray-500 transition hover:text-gray-500/75" href="#"> Home </a>
            </li>

            <li>
              <a class="text-gray-500 transition hover:text-gray-500/75" href="#"> Explore </a>
            </li>
            <li>
            <a class="text-gray-500 transition hover:text-gray-500/75" href="#"> Projects </a>
            </li>

            <li>
              <a class="text-gray-500 transition hover:text-gray-500/75" href="#"> About Us </a>
            </li>

            <li>
              <a class="text-gray-500 transition hover:text-gray-500/75" href="#"> Contact Us </a>
            </li>

            <li>

            </li>
          </ul>
        </nav>
      </div>

      <div class="flex items-center gap-4">
        <div class="sm:flex sm:gap-4">
          <a
            class="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-blue-600"
            href="#"
          >
            Login
          </a>

          <div class="hidden sm:flex">
            <a
              class="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-primary hover:text-blue-400"
              href="#"
            >
              Register
            </a>
          </div>
        </div>

        <div class="block md:hidden">
          <button class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
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
