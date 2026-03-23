'use client'
import { useToast } from 'context/toast-context'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { HubspotContactAction } from 'libs/hubspot-forms/action'
import * as Yup from 'yup'
import { Button } from '../(components)/buttons/button'
import s from './contact.module.scss'
const validationSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  message: Yup.string().required('Message is required'),
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
    const formData = new FormData()
    formData.append('firstName', values.firstName)
    formData.append('lastName', values.lastName)
    formData.append('email', values.email)
    formData.append('phoneNumber', values.phoneNumber || '')
    formData.append('message', values.message)

    try {
      // Send data to HubSpot (optional, depending on your needs)
      const hubSpotResult = await HubspotContactAction({}, formData)

      if (hubSpotResult.status === 200) {
        addToast('Contact form submitted successfully!', { type: 'success' })

        // Send data via Resend API route
        await fetch('/api/email-notification/contact-form', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        })
      } else {
        addToast('Failed to submit the contact form. Please try again.', {
          type: 'error',
        })
      }
    } catch (error) {
      addToast('An error occurred while submitting the contact form.', {
        type: 'error',
      })
    }

    setSubmitting(false)
    resetForm()
  }

  return (
    <div className={s.contactForm}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, isValid }) => (
          <Form className={s.formContainer}>
            <div className={s.formField}>
              <label htmlFor="firstName">First Name *</label>
              <Field
                type="text"
                id="firstName"
                name="firstName"
                className={s.inputField}
              />
              <ErrorMessage
                name="firstName"
                component="span"
                className={s.error}
              />
            </div>

            <div className={s.formField}>
              <label htmlFor="lastName">Last Name *</label>
              <Field
                type="text"
                id="lastName"
                name="lastName"
                className={s.inputField}
              />
              <ErrorMessage
                name="lastName"
                component="span"
                className={s.error}
              />
            </div>

            <div className={s.formField}>
              <label htmlFor="email">Email *</label>
              <Field
                type="email"
                id="email"
                name="email"
                className={s.inputField}
              />
              <ErrorMessage name="email" component="span" className={s.error} />
            </div>

            <div className={s.formField}>
              <label htmlFor="phoneNumber">Phone Number</label>
              <Field
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                className={s.inputField}
              />
              <ErrorMessage
                name="phoneNumber"
                component="span"
                className={s.error}
              />
            </div>

            <div className={s.formField}>
              <label htmlFor="message">Message *</label>
              <Field
                as="textarea"
                id="message"
                name="message"
                className={s.inputField}
              />
              <ErrorMessage
                name="message"
                component="span"
                className={s.error}
              />
            </div>

            <Button
              type="submit"
              className={s.submitButton}
              disabled={isSubmitting || !isValid}
              text={isSubmitting ? 'Submitting...' : 'Submit'}
            />
          </Form>
        )}
      </Formik>
    </div>
  )
}
