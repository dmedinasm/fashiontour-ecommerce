import { NextResponse } from 'next/server'
import { decrementItemQuantity } from '../../lib/data'
export async function POST (request) {
  try {
    const body = await request.json()
    const { idCart, productId } = body
    const items = await decrementItemQuantity(idCart, productId)
    return NextResponse.json(items)
  } catch (error) {
    console.error('Error deleting product:', error)
    return NextResponse.json(
      { error: 'Error deleting product, try again' },
      { status: 500 }
    )
  }
}
