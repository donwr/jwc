// components/EmailTemplate.tsx
import React from 'react'

interface EmailTemplateProps {
  firstName?: string
  lastName?: string
  email?: string
  message?: string
  rating?: number
  [key: string]: any // Allows for any additional fields to be added dynamically
  type: string
}

export const EmailTemplate: React.FC<EmailTemplateProps> = (props) => (
  <div>
    <h1>New {props.type} Submission</h1>
    {props.firstName && (
      <p>
        <strong>First Name:</strong> {props.firstName}
      </p>
    )}
    {props.lastName && (
      <p>
        <strong>Last Name:</strong> {props.lastName}
      </p>
    )}
    {props.email && (
      <p>
        <strong>Email:</strong> {props.email}
      </p>
    )}
    {props.phoneNumber && (
      <p>
        <strong>Phone:</strong> {props.phoneNumber}
      </p>
    )}
    {props.goal && (
      <p>
        <strong>Ziel:</strong> {props.goal}
      </p>
    )}
    {props.frequency && (
      <p>
        <strong>Training pro Woche:</strong> {props.frequency}
      </p>
    )}
    {props.whyNow && (
      <p>
        <strong>Warum jetzt:</strong> {props.whyNow}
      </p>
    )}
    {props.message && (
      <p>
        <strong>Message:</strong> {props.message}
      </p>
    )}
    {props.rating && (
      <p>
        <strong>Rating:</strong> {props.rating}
      </p>
    )}
  </div>
)
