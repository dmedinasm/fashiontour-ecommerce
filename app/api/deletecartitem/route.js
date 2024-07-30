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
    console.error('Error deleting product:', error)
    return NextResponse.json(
      { error: 'Error deleting product, try again' },
      { status: 500 }
    )
  }
}
