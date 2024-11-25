import { firestore } from '../lib/firebase'
import {
  collection, orderBy, query, limit, increment,
  where, doc, getDoc, getDocs, deleteDoc, addDoc, updateDoc
} from 'firebase/firestore'
import { toast } from 'sonner'
export const getProducts = (productLimit) => {
  const productsRef = collection(firestore, 'products')
  const queryOrder = query(productsRef, orderBy('rating', 'desc'), limit(productLimit))
  return { queryOrder }
}

export const getProductById = async (paramId) => {
  try {
    const productRef = doc(firestore, 'products', paramId)
    const productSnapshot = await getDoc(productRef)
    const productById = productSnapshot.data()
    return productById
  } catch (e) {
    console.error(e)
  }
}

export const getProductByCategory = async (paramCategory) => {
  try {
    const productsRef = collection(firestore, 'products')
    const q = query(productsRef, where('category', '==', paramCategory))
    const productsSnapshot = await getDocs(q)
    const productsByCategory = productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    return productsByCategory
  } catch (e) {
    console.error(e)
  }
}

export const addProductToCart = async (
  userName,
  email,
  productId,
  productTitle,
  productImage,
  productCategory,
  productPrice,
  quantity = 1) => {
  try {
    const cartRef = collection(firestore, 'carts')
    const productToAdd = {
      username: userName,
      email,
      cartProductId: productId,
      cartProductImage: productImage,
      cartProductCategory: productCategory,
      cartProductTitle: productTitle,
      cartProductPrice: productPrice,
      quantity
    }
    await addDoc(cartRef, productToAdd)
    toast.success('Product added to cart')
  } catch (e) {
    console.error(e)
    toast.error('Error adding product to cart')
  }
}

export const getCartProducts = (email) => {
  const cartRef = collection(firestore, 'carts')
  const queryOrder = query(cartRef, where('email', '==', email))
  return { queryOrder }
}

export const deleteProductFromCart = async (cartItemId) => {
  try {
    const cartItemRef = doc(firestore, 'carts', cartItemId)
    await deleteDoc(cartItemRef)
    toast.success('Product deleted from cart')
  } catch (e) {
    console.error(e)
    toast.error('Error deleting product from cart')
  }
}

export const incrementProductCartQty = async (cartItemId, incrementBy = 1) => {
  try {
    const cartItemRef = doc(firestore, 'carts', cartItemId)
    await updateDoc(cartItemRef, {
      quantity: increment(incrementBy)
    })
  } catch (e) {
    toast.error('Error incrementing product cart quantity')
  }
}

export const decrementProductCartQty = async (cartItemId, decrementBy = 1) => {
  try {
    const cartItemRef = doc(firestore, 'carts', cartItemId)
    await updateDoc(cartItemRef, {
      quantity: increment(-decrementBy)
    })
  } catch (e) {
    toast.error('Error decrementing product cart quantity')
  }
}

export const emptyCart = async (email) => {
  try {
    const cartRef = collection(firestore, 'carts')
    const cartQuery = query(cartRef, where('email', '==', email))
    const querySnapshot = await getDocs(cartQuery)
    const deletePromises = querySnapshot.docs.map(docSnapshot =>
      deleteDoc(doc(firestore, 'carts', docSnapshot.id))
    )
    await Promise.all(deletePromises)
  } catch (e) {
    console.error(e)
    toast.error('Error emptying cart')
  }
}

export const createOrder = async (userEmail, amount, userName) => {
  try {
    const orderRef = collection(firestore, 'orders')
    const orderToAdd = {
      email: userEmail,
      amount,
      userName
    }
    await addDoc(orderRef, orderToAdd)
    emptyCart(userEmail)
  } catch (e) {
    console.error(e)
    toast.error('Error creating order')
  }
}
