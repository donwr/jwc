import { getForm } from 'libs/hubspot-forms/fetch-form'
import FeedbackFormClient from './feedback-form-client'

export default async function FeedbackPageServer() {
  const { form } = await getForm(process.env.NEXT_HUBSPOT_FEEDBACK_FORM_ID)
  return <FeedbackFormClient form={form} />
}
