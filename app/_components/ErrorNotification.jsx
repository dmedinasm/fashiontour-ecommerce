import { AlertCircle } from 'lucide-react'
import React from 'react'

export default function ErrorNotification () {
  return (
    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg shadow-md max-w-md mx-auto my-4">
      <div className="flex items-center mb-2">
        <AlertCircle className="h-6 w-6 mr-2 text-red-500" />
        <h2 className="text-lg font-semibold">Error Loading Data</h2>
      </div>
      <p className="text-sm">
      We&apos;re sorry, but we couldn&apos;t load the data due to an error. Please try again later or contact support if the problem persists.
      </p>
    </div>
  )
}
