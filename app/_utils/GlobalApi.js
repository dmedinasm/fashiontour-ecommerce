const apiUrl = 'https://fakestoreapi.com'

const getMostRatedProducts = async () => {
  const res = await fetch(`${apiUrl}/products`)
  const data = await res.json()
  const sorted = data.sort((a, b) => b.rating.rate - a.rating.rate)

  return sorted
}

const getProductById = async (id) => {
  const res = await fetch(`${apiUrl}/products/${id}`)
  const data = await res.json()
  return data
}

const getProductListByCategory = async (category) => {
  const res = await fetch(`${apiUrl}/products/category/${category}`)
  const data = await res.json()
  return data
}

export default {
  getMostRatedProducts,
  getProductById,
  getProductListByCategory
}
