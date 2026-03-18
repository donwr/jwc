import jwt from 'jsonwebtoken'
import { verifyCustomer } from 'libs/shopify'
import { NextResponse } from 'next/server'

const SECRET_KEY = process.env.JWT_SECRET_KEY || 'your-secret-key'

export async function POST(req) {
  try {
    const { email, password } = await req.json()

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 },
      )
    }

    // Verify customer credentials with Shopify
    const customer = await verifyCustomer({ email, password })

    if (!customer) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 },
      )
    }

    // Generate JWT token and set it in the cookie
    const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: '1h' })

    const res = NextResponse.json({ message: 'Login successful' })

    res.headers.set(
      'Set-Cookie',
      `your-auth-cookie-name=${token}; HttpOnly; Path=/; Max-Age=3600`,
    )

    return res
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
