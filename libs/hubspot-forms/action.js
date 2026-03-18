'use server'

export async function HubspotNewsletterAction(prevState, formData) {
  const portalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID
  const formId =
    formData.get('formId') || process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID

  const body = {
    fields: [
      {
        name: 'email',
        value: formData.get('email'),
      },
      {
        name: 'firstname',
        value: formData.get('firstName'),
      },
    ],
    context: {
      // Ensure the correct page URI and pageName are passed
      pageUri: process.env.NEXT_PUBLIC_PAGE_URI || 'http://localhost:3000', // Or the actual page URI
      pageName: process.env.NEXT_PUBLIC_PAGE_NAME || 'Footer Subscription',
    },
  }

  const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`Failed to submit to HubSpot: ${response.status}`)
    }

    return { status: 200, message: 'Submitted to HubSpot successfully' }
  } catch (error) {
    console.error('Error submitting to HubSpot form:', formId, error)
    return { status: 500, message: 'Failed to submit to HubSpot' }
  }
}

export async function HubspotContactAction(prevState, formData) {
  const portalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID
  const formId =
    formData.get('formId') || process.env.NEXT_PUBLIC_HUBSPOT_CONTACT_FORM_ID

  const body = {
    fields: [
      { name: 'firstname', value: formData.get('firstName') },
      { name: 'lastname', value: formData.get('lastName') },
      { name: 'email', value: formData.get('email') },
      { name: 'phone', value: formData.get('phoneNumber') },
      { name: 'message', value: formData.get('message') },
    ],
    context: {
      pageUri:
        process.env.NEXT_PUBLIC_PAGE_URI || 'http://localhost:3000/contact',
      pageName: 'Contact Page',
    },
  }

  const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    })

    if (!response.ok)
      throw new Error(`Failed to submit to HubSpot: ${response.status}`)

    return { status: 200, message: 'Submitted to HubSpot successfully' }
  } catch (error) {
    console.error('Error submitting to HubSpot:', error)
    return { status: 500, message: 'Failed to submit to HubSpot' }
  }
}

export async function HubspotFeedbackAction(prevState, formData) {
  const portalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID
  const formId =
    formData.get('formId') || process.env.NEXT_PUBLIC_HUBSPOT_FEEDBACK_FORM_ID

  const body = {
    fields: [
      { name: 'firstname', value: formData.get('firstname') },
      { name: 'lastname', value: formData.get('lastname') },
      { name: 'email', value: formData.get('email') },
      { name: 'message', value: formData.get('message') },
      { name: 'rating', value: formData.get('rating') },
    ],
    context: {
      pageUri: process.env.NEXT_PUBLIC_PAGE_URI || 'http://localhost:3000',
      pageName: process.env.NEXT_PUBLIC_PAGE_NAME || 'Trainer Feedback',
    },
  }

  const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`Failed to submit to HubSpot: ${response.status}`)
    }

    return { status: 200, message: 'Submitted to HubSpot successfully' }
  } catch (error) {
    console.error('Error submitting to HubSpot form:', formId, error)
    return { status: 500, message: 'Failed to submit to HubSpot' }
  }
}
