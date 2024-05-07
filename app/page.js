import { Suspense } from 'react'
import Hero from './_components/Hero'
import ProductSection from './_components/ProductSection'
import ProductListSkeleton from './_components/ProductListSkeleton'
export default function Home () {
  return (
    <div>
      <Hero/>

      {/* Latest Product Section */}
      <Suspense fallback={<ProductListSkeleton/>}>
        <ProductSection />
      </Suspense>

      {/* Project Source Code */}

      {/* Icons Packs */}
    </div>
  )
}
