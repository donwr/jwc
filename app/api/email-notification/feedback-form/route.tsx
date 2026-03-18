// app/api/send/route.ts
import { EmailTemplate } from 'components/email/email-template'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY as string)

interface FormData {
  firstName: string
  lastName: string
  email: string
  message: string
  rating: number
}

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, message, rating }: FormData =
      await request.json()

    const type = 'Feedback Form'
    // Step 2: Attempt to send the email
    const { data, error } = await resend.emails.send({
      from: 'Jess Training <no-reply@jesstrainer.de>',
      to: ['jess@trainer.de'],
      subject: 'New Feedback Form Submission',
      react: EmailTemplate({
        firstName,
        lastName,
        email,
        message,
        rating,
        type,
      }),
    })

    if (error) {
      return NextResponse.json({ error }, { status: 500 })
    }

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
