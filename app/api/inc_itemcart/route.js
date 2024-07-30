import { NextResponse } from 'next/server'
import { incrementItemQuantity } from '../../lib/data'
export async function POST (request) {
  try {
    const body = await request.json()
    const { idCart, productId } = body
    const items = await incrementItemQuantity(idCart, productId)
    return NextResponse.json(items)
  } catch (error) {
    console.error('Error increasing item:', error)
    return NextResponse.json(
      { error: 'Error increasing item, try again' },
      { status: 500 }
    )
  }
}
