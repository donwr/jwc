// FooterSubscriptionServer.js

import { getForm } from 'libs/hubspot-forms/fetch-form'
import FooterSubscriptionClient from './footer-subscription-client'

export default async function FooterSubscriptionServer() {
  const { form } = await getForm(process.env.NEXT_HUBSPOT_FORM_ID)

  return <FooterSubscriptionClient form={form} />
}
