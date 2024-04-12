import { apiUrl, apiKey } from './fetchParams'
export const getUserCartItems = async (email) => {
  try {
    const res = await fetch(`${apiUrl}/carts?filters[email][$eq]=${email}&populate[products][populate]=*`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`
      }
    })
    if (!res.ok) throw new Error('Failed to fetch data')
    const products = await res.json()
    const { data } = products
    console.log(data)
    return data
  } catch (error) {
    console.error(error)
  }
}
