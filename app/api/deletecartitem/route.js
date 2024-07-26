import { NextResponse } from 'next/server'
import { disconnectProductFromCart } from '../../lib/data'
export async function POST (request) {
  try {
    const body = await request.json()
    const { idCart, productId } = body
    const result = await disconnectProductFromCart(
      idCart, productId
    )
    return NextResponse.json(result, { status: 201 })
  } catch (error) {
    console.error('Error adding product  to cart:', error)
    return NextResponse.json(
      { error: 'Error adding product to cart, try again' },
      { status: 500 }
    )
  }
}
