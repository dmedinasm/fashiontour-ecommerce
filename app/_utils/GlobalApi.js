const apiKey = process.env.NEXT_PUBLIC_REST_API_KEY
const Url = 'http://localhost:1337'
const apiUrl = `${Url}/api`

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
  Url,
  deleteCartItem,
  createOrder
}
