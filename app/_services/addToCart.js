import { apiKey, apiUrl } from './fetchParams'

export const addToCart = async (data) => {
  const res = await fetch(`${apiUrl}/carts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey} `
    },
    body: JSON.stringify(data)
  })

  if (!res.ok) {
    const error = await res.json()
    throw new Error(error.message || 'Failed to fetch data')
  }
  const dataResp = res.json()
  return dataResp
}
