import { EmailTemplate } from 'components/email/email-template'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

interface FormData {
  firstName: string
  lastName: string
  email: string
  phoneNumber?: string
  goal: string
  frequency: string
  whyNow: string
  message?: string
  locale?: string
}

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      goal,
      frequency,
      whyNow,
      message,
      locale,
    }: FormData = await request.json()
    const de = locale !== 'en'

    const [notification, confirmation] = await Promise.all([
      // Notify Jess
      resend.emails.send({
        from: 'Jess Training <no-reply@notifications.jwctraining.de>',
        to: ['jwctrainingberlin@gmail.com'],
        subject: `Neue Bewerbung: ${firstName} ${lastName} (${goal}, ${frequency}/Woche)`,
        react: EmailTemplate({
          firstName,
          lastName,
          email,
          phoneNumber,
          goal,
          frequency,
          whyNow,
          message,
          type: 'Application',
        }),
      }),
      // Confirm to the user
      resend.emails.send({
        from: 'Jess Training <no-reply@notifications.jwctraining.de>',
        to: [email],
        subject: de
          ? 'Deine Bewerbung ist angekommen'
          : "We've received your application",
        react: EmailTemplate({
          firstName,
          type: 'Confirmation',
          message: de
            ? `Hi ${firstName}, danke für deine Bewerbung! Ich melde mich innerhalb von 24 Stunden bei dir.`
            : `Hi ${firstName}, thanks for applying! I'll get back to you within 24 hours.`,
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
