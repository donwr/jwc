'use client'
import { useToast } from 'context/toast-context'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useLocale, useTranslations } from 'next-intl'
import { useState } from 'react'
import * as Yup from 'yup'
import { getIntroCalLink } from '../(data)/booking'
import { Button } from '../(components)/buttons/button'
import CalButton from '../(components)/buttons/cal-button'
import s from './contact.module.scss'

const GOALS = ['build', 'shape', 'other'] as const
const FREQUENCIES = ['1x', '2x', '3x+']

export default function ContactFormClient() {
  const { addToast } = useToast()
  const t = useTranslations('home.apply')
  const locale = useLocale()
  const [submitted, setSubmitted] = useState(false)
  const calLink = getIntroCalLink(locale)

  const validationSchema = Yup.object({
    firstName: Yup.string().required(t('required')),
    lastName: Yup.string().required(t('required')),
    email: Yup.string().email(t('invalidEmail')).required(t('required')),
    phoneNumber: Yup.string().optional(),
    goal: Yup.string().required(t('required')),
    frequency: Yup.string().required(t('required')),
    whyNow: Yup.string().required(t('required')),
    message: Yup.string().optional(),
  })

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    goal: '',
    frequency: '',
    whyNow: '',
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
        body: JSON.stringify({
          ...values,
          goal: t(`goalOptions.${values.goal as (typeof GOALS)[number]}`),
          locale,
        }),
      })

      if (res.ok) {
        resetForm()
        setSubmitted(true)
      } else {
        addToast(t('error'), { type: 'error' })
      }
    } catch {
      addToast(t('error'), { type: 'error' })
    }

    setSubmitting(false)
  }

  if (submitted) {
    return (
      <div className={s.success}>
        <h3>{t('successHeading')}</h3>
        <p>{t('successText')}</p>
        <CalButton
          text={`${t('bookCall')} →`}
          calLink={calLink}
          calConfig='{"layout":"month_view"}'
          className={s.submitButton}
        />
      </div>
    )
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
                <label htmlFor="firstName">{t('firstName')}</label>
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
                <label htmlFor="lastName">{t('lastName')}</label>
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
            </div>

            <div className={s.formRow}>
              <div className={s.formField}>
                <label htmlFor="email">{t('email')}</label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className={s.inputField}
                />
                <ErrorMessage
                  name="email"
                  component="span"
                  className={s.error}
                />
              </div>
              <div className={s.formField}>
                <label htmlFor="phoneNumber">{t('phone')}</label>
                <Field
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="+49 123 456 789"
                  className={s.inputField}
                />
              </div>
            </div>

            <div className={s.formRow}>
              <div className={s.formField}>
                <label htmlFor="goal">{t('goal')}</label>
                <Field
                  as="select"
                  id="goal"
                  name="goal"
                  className={s.inputField}
                >
                  <option value="" disabled>
                    {t('select')}
                  </option>
                  {GOALS.map((goal) => (
                    <option key={goal} value={goal}>
                      {t(`goalOptions.${goal}`)}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="goal"
                  component="span"
                  className={s.error}
                />
              </div>
              <div className={s.formField}>
                <label htmlFor="frequency">{t('frequency')}</label>
                <Field
                  as="select"
                  id="frequency"
                  name="frequency"
                  className={s.inputField}
                >
                  <option value="" disabled>
                    {t('select')}
                  </option>
                  {FREQUENCIES.map((frequency) => (
                    <option key={frequency} value={frequency}>
                      {frequency}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="frequency"
                  component="span"
                  className={s.error}
                />
              </div>
            </div>

            <div className={s.formField}>
              <label htmlFor="whyNow">{t('whyNow')}</label>
              <Field
                as="textarea"
                id="whyNow"
                name="whyNow"
                placeholder={t('whyNowPlaceholder')}
                className={s.inputField}
              />
              <ErrorMessage
                name="whyNow"
                component="span"
                className={s.error}
              />
            </div>

            <div className={s.formField}>
              <label htmlFor="message">{t('message')}</label>
              <Field
                as="textarea"
                id="message"
                name="message"
                className={s.inputField}
              />
            </div>

            <Button
              type="submit"
              className={s.submitButton}
              disabled={isSubmitting || !isValid || !dirty}
              text={isSubmitting ? t('submitting') : `${t('submit')} →`}
            />
          </Form>
        )}
      </Formik>
    </div>
  )
}
