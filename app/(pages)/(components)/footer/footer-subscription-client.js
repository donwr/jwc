'use client'
import { useToast } from 'context/toast-context'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { HubspotNewsletterAction } from '../../../../libs/hubspot-forms/action'
import s from './footerSubscription.module.scss'

const validationSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
})

export default function FooterSubscriptionClient({ form }) {
  const { addToast } = useToast() // Get addToast from the toast context

  const initialValues = {
    firstName: '',
    email: '',
  }

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const formData = new FormData()
    formData.append('firstName', values.firstName)
    formData.append('email', values.email)
    formData.append('formId', form?.id || '')

    try {
      const response = await HubspotNewsletterAction({}, formData)
      setSubmitting(false)
      resetForm()

      if (response.status === 200) {
        addToast('Subscription successful', { type: 'success' })

        // Send data to the new API route to trigger the email
        const emailResponse = await fetch(
          '/api/email-notification/newsletter-subscription',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              firstName: values.firstName,
              email: values.email,
            }),
          },
        )

        if (!emailResponse.ok) {
          console.error('Failed to send subscription email')
        }
      } else {
        addToast('Subscription failed. Please try again.', { type: 'error' })
      }
    } catch (error) {
      setSubmitting(false)
      addToast('An error occurred. Please try again later.', { type: 'error' })
      console.error('An error occurred:', error)
    }
  }

  return (
    <div className={s.footerSubscription}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, isValid }) => (
          <Form className={s.formContainer}>
            <div className={s.formField}>
              <label htmlFor="firstName">First name *</label>
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
              <label htmlFor="email">Email *</label>
              <Field
                type="email"
                id="email"
                name="email"
                className={s.inputField}
              />
              <ErrorMessage name="email" component="span" className={s.error} />
            </div>

            <button
              type="submit"
              className={s.subscribeButton}
              disabled={isSubmitting || !isValid}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>

            <div className={s.disclaimer}>
              By signing up via text you agree to receive recurring automated
              marketing messages... <a href="/privacy-policy">Privacy Policy</a>{' '}
              & <a href="/terms-of-service">Terms of Service</a>.
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}
