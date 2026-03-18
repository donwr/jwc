'use client'
import { Form, SubmitButton, useFormContext } from 'libs/form'
import { getForm } from 'libs/hubspot-forms/fetch-form'
import s from './footerSubscription.module.scss'
export default async function FooterSubscription() {
  const { form } = await getForm(process.env.NEXT_HUBSPOT_FORM_ID)

  return (
    <div className={s.footerSubscription}>
      <Form
        className={s.formContainer}
        formId={form?.id}
        action={'HubspotNewsletterAction'}
      >
        <FormField
          id="first-name"
          name="first-name"
          label="First Name"
          type="string"
          required={true}
          errorMessage="This field is required."
        />
        <FormField
          id="email"
          name="email"
          label="Email"
          type="email"
          required={true}
          errorMessage="This field is required."
        />
        <SubmitButton className={s.subscribeButton} defaultText="Subscribe" />
        <div className={s.disclaimer}>
          By signing up via text you agree to receive recurring automated
          marketing messages and shopping cart reminders at the phone number
          provided. Consent is not a condition of purchase. Reply STOP to
          unsubscribe. HELP for help. Msg frequency varies. Msg & Data rates may
          apply. View <a href="/privacy-policy">Privacy Policy</a> &{' '}
          <a href="/terms-of-service">Terms of Service</a>.
        </div>
      </Form>
    </div>
  )
}

function FormField({ id, name, label, type, required, pattern, errorMessage }) {
  const { register, errors } = useFormContext()

  return (
    <div className={s.formField}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        {...register(name, { required, pattern })}
      />
      {errors[name] && (
        <span className={s.errorMessage}>
          {errorMessage || errors[name]?.message}
        </span>
      )}
    </div>
  )
}
