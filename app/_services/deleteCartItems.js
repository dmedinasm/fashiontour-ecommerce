import { apiUrl, apiKey } from '../_services/fetchParams'

export const deleteCartItem = async (id) => {
  try {
    const res = await fetch(`${apiUrl}/carts/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey} `
      }
    })
    if (!res.ok) throw new Error('Failed to fetch data')
    const dataResp = res.json()
    return dataResp
  } catch (err) {
    console.error(err)
  }
}
