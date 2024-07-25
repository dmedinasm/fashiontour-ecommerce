import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient()

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

export async function createCartWithProduct (userName, email, productId, quantity = 1) {
  const result = await prisma.cart.upsert({
    where: {
      email
    },
    create: {
      userName,
      email,
      products: {
        create: {
          product: {
            connect: { id: productId }
          },
          quantity
        }
      }
    },
    update: {
      products: {
        create: {
          product: {
            connect: { id: productId }
          },
          quantity
        }
      }
    },
    include: {
      products: {
        include: {
          product: true
        }
      }
    }
  })
  return result
}

export async function getCartItems (email) {
  const cartItems = await prisma.cart.findFirst({
    where: {
      email
    },
    include: {
      products: {
        include: {
          product: true
        }
      }
    }
  })
  return cartItems
}
