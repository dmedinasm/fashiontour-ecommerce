import { params } from './fetchedData'
import { apiKey, apiUrl } from './fetchParams'
export const getProductListByCategory = async (category) => {
  const res = await fetch(`${apiUrl}/products?filters[category]=${category}&&populate=*`, {
    headers: {
      method: 'GET',
      Authorization: `Bearer ${apiKey}`
    }
  })
  const products = await res.json()
  const { data } = products
  const dataParams = params(data)
  return dataParams
}
