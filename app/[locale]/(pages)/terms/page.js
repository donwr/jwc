import React from 'react'
import { Wrapper } from '../(components)/wrapper'
import s from './terms.module.scss'
const TermsOfService = () => {
  return (
    <Wrapper theme="dark">
      <div className={s.terms}>
        <h2>Terms of Service</h2>

        <h3>Last Updated: September 8th, 2023</h3>

        <h4>Acceptance of Terms</h4>
        <p>
          By accessing or using Jess Personal Training's Website, you agree to
          comply with and be bound by these Terms of Service.
        </p>

        <h4>Changes to Terms</h4>
        <p>
          We reserve the right to change, modify, or revise these Terms of
          Service at any time.
        </p>

        <h4>Use of the Service</h4>
        <p>
          You agree to use the Service for lawful purposes and in accordance
          with these Terms of Service.
        </p>

        <h4>Limitation of Liability</h4>
        <p>
          In no event shall Jess Personal Training be liable for any indirect,
          incidental, special, consequential or punitive damages.
        </p>

        <h4>Governing Law</h4>
        <p>
          These Terms of Service are governed by the laws of the United States.
        </p>

        <h4>Termination</h4>
        <p>
          We reserve the right to terminate or suspend your account and access
          to the Service at our sole discretion, without notice, for conduct
          that we believe violates these Terms of Service or is harmful to other
          users of the Service, us, or third parties, or for any other reason.
        </p>

        <h4>Contact Information</h4>
        <p>
          For any questions about these Terms of Service, please contact us:
        </p>
        <ul>
          <li>By email: jess@trainer.de</li>
          <li>By phone: (917) 426 0289</li>
        </ul>
      </div>
    </Wrapper>
  )
}

export default TermsOfService
