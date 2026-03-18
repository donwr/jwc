import jwt from 'jsonwebtoken'
import { createCustomer } from 'libs/shopify'
import { NextResponse } from 'next/server'

const SECRET_KEY = process.env.JWT_SECRET_KEY || 'your-secret-key'

export async function POST(req) {
  try {
    const { email, password, firstName, lastName } = await req.json()

    if (!email || !password || !firstName || !lastName) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 },
      )
    }

    // Create customer in Shopify
    await createCustomer({
      email,
      password,
      firstName,
      lastName,
    })

    // Generate JWT token after user is created
    const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: '1h' })

    // Create the response without a redirect
    const res = NextResponse.json(
      { message: 'Sign-up successful!' },
      { status: 200 },
    )

    // Manually set the Set-Cookie header for the JWT token
    res.headers.set(
      'Set-Cookie',
      `your-auth-cookie-name=${token}; HttpOnly; Path=/; Max-Age=3600`,
    )

    return res
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
