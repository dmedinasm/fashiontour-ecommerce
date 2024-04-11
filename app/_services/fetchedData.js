import { Url } from './fetchParams'
export const params = (fetchedData) => {
  const data = fetchedData.map(product => {
    const title = product.attributes.title
    const category = product.attributes.category
    const description = product.attributes.description[0].children[0].text
    const price = product.attributes.price
    const image = `${Url}${product.attributes.image.data.attributes.url}`
    const id = product.id
    const rate = product.attributes.rating
    return { title, category, description, price, image, id, rate }
  })
  return data
}

export const objectParams = (dataObject) => {
  const title = dataObject.attributes.title
  const category = dataObject.attributes.category
  const description = dataObject.attributes.description[0].children[0].text
  const price = dataObject.attributes.price
  const image = `${Url}${dataObject.attributes.image.data.attributes.url}`
  const id = dataObject.id
  const rate = dataObject.attributes.rating
  return { title, category, description, price, image, id, rate }
}
