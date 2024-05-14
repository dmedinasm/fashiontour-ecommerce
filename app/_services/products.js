import { params } from './fetchedData'
import { apiUrl } from './fetchParams'
export const getProducts = async () => {
  try {
    const res = await fetch(`${apiUrl}/products?populate=*`)
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    const products = await res.json()
    const { data } = products
    const dataParams = params(data)
    /* const sorted = dataParams.sort((a, b) => b.rate - a.rate) */
    return dataParams
  } catch (error) {
    console.error(error)
  }
}