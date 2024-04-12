import { apiKey, apiUrl } from './fetchParams'

export const addToCart = async (data) => {
  try {
    const res = await fetch(`${apiUrl}/carts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey} `
      },
      body: JSON.stringify(data)
    })
    if (!res.ok) throw new Error('Failed to fetch data')
    const dataResp = res.json()
    return dataResp
  } catch (error) {
    console.error(error)
  }
}
