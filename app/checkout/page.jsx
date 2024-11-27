import React, { Suspense } from 'react'
import CheckoutContent from './_components/CheckoutContent'
import SkeletonCheck from './_components/SkeletonCheck'
export default function page () {
  return (
    <Suspense fallback={<SkeletonCheck/>}>
      <CheckoutContent/>
    </Suspense>
  )
}
