/* const apiKey = process.env.NEXT_PUBLIC_REST_API_KEY */
const apiUrl = 'http://localhost:1337/api'

const getMostRatedProducts = async () => {
  const res = await fetch(`${apiUrl}/products?populate=*`)
  const products = await res.json()
  const { data } = products
  const sorted = data.sort((a, b) => b.attributes.rating - a.attributes.rating)
  return sorted
}

/* const getProductById = async (id) => {
  const res = await fetch(`${apiUrl}/products/${id}?populate=*`)
  const data = await res.json()
  return data
} */

/*
const getProductListByCategory = async (category) => {
  const res = await fetch(`${apiUrl}/products/category/${category}`)
  const data = await res.json()
  return data
}

/* const addToCart = () => {

}
*/
export default {
  getMostRatedProducts
  /* getProductById */
  /* getProductListByCategory */
}
