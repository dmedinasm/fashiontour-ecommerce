import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getProducts = async () => {
  try {
    const products = await prisma.product.findMany()
    return products
  } catch (err) {
    console.error('Error fetching products:', err)
    throw new Error('Error fetching products')
  }
}
