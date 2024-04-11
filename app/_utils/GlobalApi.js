const apiKey = process.env.NEXT_PUBLIC_REST_API_KEY
const Url = 'http://localhost:1337'
const apiUrl = `${Url}/api`

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

const deleteCartItem = async (id) => {
  const res = await fetch(`${apiUrl}/carts/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey} `
    }
  })
  const dataResp = res.json()
  return dataResp
}

const createOrder = async (data) => {
  const res = await fetch(`${apiUrl}/orders`, {
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
export default {
  addToCart,
  getUserCartItems,
  Url,
  deleteCartItem,
  createOrder
}
