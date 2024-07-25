import { NextResponse } from 'next/server'
import { getCartItems } from '../../lib/data'

export async function POST (request) {
  try {
    const body = await request.json()
    const { email } = body
    const items = await getCartItems(email)
    return NextResponse.json(items)
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json(
      { error: 'Error fetching data, try again' },
      { status: 500 }
    )
  }
}
