const apiKey = process.env.NEXT_PUBLIC_REST_API_KEY
const Url = 'http://localhost:1337'
const apiUrl = `${Url}/api`

const params = (fetchedData) => {
  const data = fetchedData.map(product => {
    const title = product.attributes.title
    const category = product.attributes.category
    const description = product.attributes.description[0].children[0].text
    const price = product.attributes.price
    const image = `${Url}${product.attributes.image.data.attributes.url}`
    const id = product.id
    const rate = product.attributes.rating
    return { title, category, description, price, image, id, rate }
  })
  return data
}
const objectParams = (dataObject) => {
  const title = dataObject.attributes.title
  const category = dataObject.attributes.category
  const description = dataObject.attributes.description[0].children[0].text
  const price = dataObject.attributes.price
  const image = `${Url}${dataObject.attributes.image.data.attributes.url}`
  const id = dataObject.id
  const rate = dataObject.attributes.rating
  return { title, category, description, price, image, id, rate }
}
const getMostRatedProducts = async () => {
  const res = await fetch(`${apiUrl}/products?populate=*`)
  const products = await res.json()
  const { data } = products
  const dataParams = params(data)
  const sorted = dataParams.sort((a, b) => b.rate - a.rate)
  return sorted
}

const getProductById = async (id) => {
  const res = await fetch(`${apiUrl}/products/${id}?populate=*`)
  const product = await res.json()
  const { data } = product
  const dataResult = objectParams(data)
  return dataResult
}

const getProductListByCategory = async (category) => {
  const res = await fetch(`${apiUrl}/products?filters[category]=${category}&&populate=*`)
  const products = await res.json()
  const { data } = products
  const dataParams = params(data)
  return dataParams
}

const addToCart = async (data) => {
  const res = await fetch(`${apiUrl}/carts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey} `
    },
    body: JSON.stringify(data)
  })
  const dataResp = res.json()
  return dataResp
}

const getUserCartItems = async (email) => {
  const res = await fetch(`${apiUrl}/carts?filters[email][$eq]=${email}&populate[products][populate]=*`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`
    }
  })
  const products = await res.json()
  const { data } = products
  console.log(data)
  return data
}

export default {
  getMostRatedProducts,
  getProductById,
  getProductListByCategory,
  addToCart,
  getUserCartItems,
  Url
}
