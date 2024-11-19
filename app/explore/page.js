import Search from './Search'
import Products from './Products'

async function Explore ({ searchParams }) {
  const query = searchParams?.query || ''
  return (
    <section className='my-10' >
        <h2 className='w-full text-gray-700 ss:text-center text-2xl font-semibold'>Explore Our Products</h2>

         <Search />
        <Products query={query}/>

    </section>
  )
}

export default Explore
