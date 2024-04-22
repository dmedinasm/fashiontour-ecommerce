import { useContext } from 'react'
import { createOrder } from '../_services/createOrder'
import { deleteCartItem } from '../_services/deleteCartItems'
import { CartContext } from '../_context/CartContext'
export function useCreateOrder ({ amount, user, cart }) {
  const { setChangedCart } = useContext(CartContext)
  const productsIds = cart.map(element => {
    return element?.attributes?.products?.data[0].id
  })
  const data = {
    data: {
      email: user.primaryEmailAddress.emailAddress,
      amount,
      userName: user.fullName,
      products: productsIds
    }
  }
  const createOrd = () => {
    createOrder(data).then(resp => {
      console.log(resp)
      if (resp) {
        cart.forEach(element => {
          deleteCartItem(element.id).then(res => {
            console.log(res)
          })
          setChangedCart(resp)
        })
      } else {
        console.log('Error:no se pudo crear la orden, intentelo de nuevo')
      }
    })
  }

  return { createOrd }
}
