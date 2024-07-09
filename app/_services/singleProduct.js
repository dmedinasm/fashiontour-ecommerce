import { objectParams } from './fetchedData'
import { apiKey, apiUrl } from './fetchParams'
export const getProductById = async (id) => {
  try {
    const res = await fetch(`${apiUrl}/products/${id}?populate=*`, {
      headers: {
        method: 'GET',
        Authorization: `Bearer ${apiKey}`
      }
    })
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    const product = await res.json()
    const { data } = product
    const dataResult = objectParams(data)
    return dataResult
  } catch (error) {
    console.error(error)
  }
}
