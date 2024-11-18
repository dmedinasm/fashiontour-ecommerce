import Hero from './_components/Hero'
import ProductSection from './_components/ProductSection'
import Testimonial from './_components/Testimonial'
export default function Home () {
  return (
    <main className='mb-20 pb-40'>
      <Hero/>
      {/*  Product Section */}
        <ProductSection />
      {/* Testimonial Section */}
      <Testimonial/>
    </main>
  )
}
