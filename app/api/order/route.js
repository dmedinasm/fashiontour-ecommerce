import { NextResponse } from 'next/server'
import { createOrder } from '../../lib/data'
export async function POST (request) {
  try {
    const body = await request.json()
    const { email, amount, userName, cartId } = body
    const result = await createOrder(
      email, amount, userName, cartId
    )
    return NextResponse.json(result, { status: 201 })
  } catch (error) {
    console.error('Error creating order:', error)
    return NextResponse.json(
      { error: 'Error creating order, try again' },
      { status: 500 }
    )
  }
}
