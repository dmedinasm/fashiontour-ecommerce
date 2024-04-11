import { params } from './fetchedData'
import { apiUrl } from './fetchParams'
export const getProductListByCategory = async (category) => {
  const res = await fetch(`${apiUrl}/products?filters[category]=${category}&&populate=*`)
  const products = await res.json()
  const { data } = products
  const dataParams = params(data)
  return dataParams
}
