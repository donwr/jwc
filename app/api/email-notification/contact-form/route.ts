import { EmailTemplate } from 'components/email/email-template'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

interface FormData {
  firstName: string
  lastName: string
  email: string
  phoneNumber?: string
  message: string
}

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const { firstName, lastName, email, phoneNumber, message }: FormData =
      await request.json()

    const [notification, confirmation] = await Promise.all([
      // Notify Jess
      resend.emails.send({
        from: 'Jess Training <no-reply@notifications.jwctraining.de>',
        to: ['jess@trainer.de'],
        subject: `New message from ${firstName} ${lastName}`,
        react: EmailTemplate({ firstName, lastName, email, phoneNumber, message, type: 'Contact Form' }),
      }),
      // Confirm to the user
      resend.emails.send({
        from: 'Jess Training <no-reply@notifications.jwctraining.de>',
        to: [email],
        subject: "We've received your message",
        react: EmailTemplate({
          firstName,
          type: 'Confirmation',
          message: `Hi ${firstName}, thanks for reaching out! I've received your message and will get back to you as soon as possible.\n\nYour message: "${message}"`,
        }),
      }),
    ])

    if (notification.error || confirmation.error) {
      return NextResponse.json(
        { error: notification.error ?? confirmation.error },
        { status: 500 },
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
