const apiUrl = 'https://fakestoreapi.com'

const getLatestProducts = async () => {
  const res = await fetch(`${apiUrl}/products?limit=6`)
  const data = await res.json()

  return data
}

export default {
  getLatestProducts
}
