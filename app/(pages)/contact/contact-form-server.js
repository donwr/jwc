// ContactPageServer.js

import { getForm } from 'libs/hubspot-forms/fetch-form'
import ContactFormClient from './contact-form-client'

export default async function ContactPageServer() {
  const { form } = await getForm(process.env.NEXT_HUBSPOT_CONTACT_FORM_ID)

  return <ContactFormClient form={form} />
}
