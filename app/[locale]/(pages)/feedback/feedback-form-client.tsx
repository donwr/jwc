'use client'

import { useToast } from 'context/toast-context'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { HubspotFeedbackAction } from 'libs/hubspot-forms/action'
import * as Yup from 'yup'
import { Button } from '../(components)/buttons/button'
import s from './feedback.module.scss'

const validationSchema = Yup.object({
  firstname: Yup.string().required('First name is required'),
  lastname: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  message: Yup.string().required('Message is required'),
  rating: Yup.number().min(1).max(5).required('Rating is required'),
})

export default function FeedbackFormClient({ form }) {
  const { addToast } = useToast()

  const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
    message: '',
    rating: '',
  }

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const formData = new FormData()
    formData.append('firstname', values.firstname)
    formData.append('lastname', values.lastname)
    formData.append('email', values.email)
    formData.append('message', values.message)
    formData.append('rating', values.rating)
    formData.append('formId', form?.id || '')

    try {
      const result = await HubspotFeedbackAction({}, formData)

      if (result.status === 200) {
        addToast('Feedback submitted successfully!', { type: 'success' })
        const type = 'Feedback Form'
        // Send data to the new API route to trigger the email
        const emailResponse = await fetch(
          '/api/email-notification/feedback-form',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              firstName: values.firstname,
              lastName: values.lastname,
              email: values.email,
              message: values.message,
              rating: values.rating,
              type: type,
            }),
          },
        )
        if (!emailResponse.ok) {
          console.error('Failed to send subscription email')
        }
      } else {
        addToast('Failed to submit feedback. Please try again.', {
          type: 'error',
        })
      }
    } catch (error) {
      addToast('An error occurred while submitting your feedback.', {
        type: 'error',
      })
    }

    setSubmitting(false)
    resetForm()
  }

  return (
    <div className={s.feedbackForm}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, isValid }) => (
          <Form className={s.formContainer}>
            <div className={s.formField}>
              <label htmlFor="firstname">First Name *</label>
              <Field
                type="text"
                id="firstname"
                name="firstname"
                className={s.inputField}
              />
              <ErrorMessage
                name="firstname"
                component="span"
                className={s.error}
              />
            </div>

            <div className={s.formField}>
              <label htmlFor="lastname">Last Name *</label>
              <Field
                type="text"
                id="lastname"
                name="lastname"
                className={s.inputField}
              />
              <ErrorMessage
                name="lastname"
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

            <div className={s.formField}>
              <label htmlFor="rating">Rating (1-5) *</label>
              <Field
                type="number"
                id="rating"
                name="rating"
                className={s.inputField}
              />
              <ErrorMessage
                name="rating"
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
