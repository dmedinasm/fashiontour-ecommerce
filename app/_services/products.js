import { params } from './fetchedData'
import { apiUrl, apiKey } from './fetchParams'

export const getProducts = async () => {
  try {
    const res = await fetch(`${apiUrl}/products?populate=*`, {
      headers: {
        method: 'GET',
        Authorization: `Bearer ${apiKey}`
      },
      next: { revalidate: 30 }
    })

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    const products = await res.json()
    const { data } = products
    const dataParams = params(data)
    return dataParams
  } catch (error) {
    console.error(error)
  }
}
