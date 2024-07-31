import { Suspense } from 'react'
import Hero from './_components/Hero'
import ProductSection from './_components/ProductSection'
import ProductListSkeleton from './_components/ProductListSkeleton'
import Testimonial from './_components/Testimonial'
export default function Home () {
  return (
    <main className='mb-20 pb-40'>
      <Hero/>
      {/* Latest Product Section */}
      <Suspense fallback={<ProductListSkeleton/>}>
        <ProductSection />
      </Suspense>
      {/* Testimonial Section */}
      <Testimonial/>
    </main>
  )
}
