'use client'
import { useToast } from 'context/toast-context'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { Button } from '../(components)/buttons/button'
import s from './contact.module.scss'

const validationSchema = Yup.object({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  message: Yup.string().required('Required'),
  phoneNumber: Yup.string().optional(),
})

export default function ContactFormClient() {
  const { addToast } = useToast()

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
  }

  const handleSubmit = async (
    values: typeof initialValues,
    { setSubmitting, resetForm }: any,
  ) => {
    try {
      const res = await fetch('/api/email-notification/contact-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })

      if (res.ok) {
        addToast("Message sent! You'll hear from Jess soon.", { type: 'success' })
        resetForm()
      } else {
        addToast('Something went wrong. Please try again.', { type: 'error' })
      }
    } catch {
      addToast('Something went wrong. Please try again.', { type: 'error' })
    }

    setSubmitting(false)
  }

  return (
    <div className={s.contactForm}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, isValid, dirty }) => (
          <Form className={s.formContainer}>
            <div className={s.formRow}>
              <div className={s.formField}>
                <label htmlFor="firstName">First Name</label>
                <Field
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Jane"
                  className={s.inputField}
                />
                <ErrorMessage name="firstName" component="span" className={s.error} />
              </div>
              <div className={s.formField}>
                <label htmlFor="lastName">Last Name</label>
                <Field
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Smith"
                  className={s.inputField}
                />
                <ErrorMessage name="lastName" component="span" className={s.error} />
              </div>
            </div>

            <div className={s.formRow}>
              <div className={s.formField}>
                <label htmlFor="email">Email</label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="jane@example.com"
                  className={s.inputField}
                />
                <ErrorMessage name="email" component="span" className={s.error} />
              </div>
              <div className={s.formField}>
                <label htmlFor="phoneNumber">Phone (optional)</label>
                <Field
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="+49 123 456 789"
                  className={s.inputField}
                />
              </div>
            </div>

            <div className={s.formField}>
              <label htmlFor="message">Message</label>
              <Field
                as="textarea"
                id="message"
                name="message"
                placeholder="Tell me what you're looking for..."
                className={s.inputField}
              />
              <ErrorMessage name="message" component="span" className={s.error} />
            </div>

            <Button
              type="submit"
              className={s.submitButton}
              disabled={isSubmitting || !isValid || !dirty}
              text={isSubmitting ? 'Sending...' : 'Send Message'}
            />
          </Form>
        )}
      </Formik>
    </div>
  )
}
