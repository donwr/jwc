// app/api/subscribe/route.ts
import { EmailTemplate } from 'components/email/email-template'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

interface SubscriptionData {
  firstName: string
  email: string
}

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const { firstName, email }: SubscriptionData = await request.json()
    const type = 'Newsletter Subscription'

    const { data, error } = await resend.emails.send({
      from: 'Jess Training <no-reply@jesstrainer.de>',
      to: ['jess@trainer.de'],
      subject: 'New Newsletter Subscription',
      react: EmailTemplate({ firstName, email, type }),
    })

    if (error) {
      return NextResponse.json({ error }, { status: 500 })
    }

    return NextResponse.json({
      message: 'Subscription email sent successfully',
      data,
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to send subscription email' },
      { status: 500 },
    )
  }
}
