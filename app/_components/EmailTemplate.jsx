import * as React from 'react'

export const EmailTemplate = ({
  body
}) => (
  <div className="bg-gray-100 min-h-screen flex items-center justify-center">
    <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
      <h1 className="text-3xl font-bold text-center text-purple-600 mb-6">
        Fashion Tour Payment Confirmation
      </h1>
      <div className="bg-purple-100 rounded-lg p-4 mb-6">
        <h3 className="text-xl font-semibold text-purple-800 text-center">
          Total Amount: ${body.amount}
        </h3>
      </div>
      <h4 className="text-lg text-gray-700 text-center">
        Thanks for trusting us, <span className="font-semibold">{body.fullName}</span>!
      </h4>
      <p className="mt-4 text-gray-600 text-center">
        We look forward to seeing you again soon.
      </p>
    </div>
  </div>
)
