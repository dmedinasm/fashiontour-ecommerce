'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import ConfirmedIcon from './ConfirmedIcon'
const PaymentConfirm = () => {
  const router = useRouter()
  return (
    <div className='flex flex-col place items-center gap-8 mb-40 mt-20'>
      {/* <iframe src="https://lottie.host/embed/34ae8450-88e1-40da-bb88-ebd727aa1ccf/OEakH6qgUJ.json"></iframe> */}
      <ConfirmedIcon/>
      <h2 className='font-medium text-3xl'>Payment Successfull !</h2>
      <p className="text-center">We sent an email with your order confirmation </p>
      <button onClick={() => router.push('/')} className='bg-primary text-white p-2 rounded-md'>Go to Home</button>
    </div>
  )
}

export default PaymentConfirm
