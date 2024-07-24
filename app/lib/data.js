import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getProducts = async () => {
  try {
    const products = await prisma.product.findMany()
    return products
  } catch (error) {
    console.error('Error fetching products:', error)
    throw new Error('Error fetching data, try again')
  }
}

export const getProductById = async (paramId) => {
  try {
    const product = await prisma.product.findFirst({
      where: {
        id: paramId
      }
    })
    return product
  } catch (error) {
    console.error('Error fetching products:', error)
    throw new Error('Error fetching data, try again')
  }
}

export const getProductByCategory = async (paramCategory) => {
  try {
    const products = await prisma.product.findMany({
      where: {
        category: paramCategory
      }
    })
    return products
  } catch (error) {
    console.error('Error fetching products:', error)
    throw new Error('Error fetching data, try again')
  }
}
