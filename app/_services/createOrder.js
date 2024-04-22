import { apiUrl, apiKey } from './fetchParams'
export const createOrder = async (data) => {
  try {
    const res = await fetch(`${apiUrl}/orders`, {
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
  } catch (err) {
    console.error(err)
  }
}
