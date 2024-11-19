import { PrismaClient } from '@prisma/client'
import { auth, firestore } from '../lib/firebase'
import {
  collection, orderBy, query, limit, where,
  serverTimestamp, doc, getDoc, getDocs, addDoc
} from 'firebase/firestore'
export const prisma = new PrismaClient()
export const getProducts = () => {
  const productsRef = collection(firestore, 'products')
  const queryOrder = query(productsRef, orderBy('rating', 'desc'), limit(8))
  return { queryOrder }
}

export const getProductById = async (paramId) => {
  const productRef = doc(firestore, 'products', paramId)
  const productSnapshot = await getDoc(productRef)
  const productById = productSnapshot.data()
  return productById
}

export const getProductByCategory = async (paramCategory) => {
  const productsRef = collection(firestore, 'products')
  const q = query(productsRef, where('category', '==', paramCategory))
  const productsSnapshot = await getDocs(q)
  const productsByCategory = productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  return productsByCategory
}

export async function createCartWithProduct (userName, email, productId, quantity = 1) {
  try {
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
  } catch (err) {
    console.error('Error creating record', err)
  }
}

export async function getCartItems (email) {
  try {
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
  } catch (err) {
    console.error('Error fetching data', err)
  }
}

export async function disconnectProductFromCart (idCart, productId) {
  try {
    await prisma.cartProduct.deleteMany({
      where: {
        cartId: idCart,
        productId
      }
    })

    const updatedCart = await prisma.cart.findUnique({
      where: { id: idCart },
      include: {
        products: {
          include: {
            product: true
          }
        }
      }
    })
    return updatedCart
  } catch (err) {
    console.error('Error fetching data', err)
  }
}

export async function incrementItemQuantity (idCart, productId) {
  try {
    const updatedItem = await prisma.cartProduct.update({
      where: {
        cartId_productId: { cartId: idCart, productId } //eslint-disable-line
      },
      data: {
        quantity: {
          increment: 1
        }
      }
    })

    const updatedCart = await prisma.cart.findUnique({
      where: { id: updatedItem.cartId },
      include: {
        products: {
          include: {
            product: true
          }
        }
      }
    })

    return updatedCart
  } catch (err) {
    console.error('Error fetching data', err)
  }
}

export async function decrementItemQuantity (idCart, productId) {
  try {
    const updatedItem = await prisma.cartProduct.update({
      where: {
        cartId_productId: { cartId: idCart, productId } //eslint-disable-line
      },
      data: {
        quantity: {
          decrement: 1
        }
      }
    })

    const updatedCart = await prisma.cart.findUnique({
      where: { id: updatedItem.cartId },
      include: {
        products: {
          include: {
            product: true
          }
        }
      }
    })

    return updatedCart
  } catch (err) {
    console.error('Error fetching data', err)
  }
}

export async function createOrder (email, amount, userName, cartId) {
  try {
    const order = await prisma.order.create({
      data: {
        email,
        amount,
        userName
      }
    })

    const updatedCart = await prisma.cartProduct.deleteMany({
      where: {
        cartId
      }
    })

    return { order, updatedCart }
  } catch (err) {
    console.error('Error creating order', err)
  }
}
