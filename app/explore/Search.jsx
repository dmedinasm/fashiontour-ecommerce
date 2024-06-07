'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import { useDebouncedCallback } from 'use-debounce'

const WAIT_BETWEEN_KEY_PRESSES = 500
function Search () {
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)
  const pathname = usePathname()
  const { replace } = useRouter()

  const handleSearch = useDebouncedCallback((term) => {
    if (term) {
      params.set('query', term)
    } else {
      params.delete('query')
    }
    replace(`${pathname}?${params.toString()}`)
  }, WAIT_BETWEEN_KEY_PRESSES)

  return (
    <div className="relative mt-6 max-w-lg mx-auto">
      <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
        <svg className="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none">
          <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <input className="w-full border rounded-md pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none focus:shadow-outline" type="text"
        placeholder="Search product..."
        onChange={(event) => handleSearch(event.target.value)}
        defaultValue={searchParams.get('query')?.toString()}
      ></input>
    </div>
  )
}

export default Search
