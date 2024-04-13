import { apiUrl, apiKey } from '../_services/fetchParams'

export const deleteCartItem = async (id) => {
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
