import { Wrapper } from '../(components)/wrapper'
import s from './policy.module.scss'
const PrivacyPolicy = () => {
  return (
    <Wrapper theme="dark">
      <div className={`${s.policy}`}>
        <h2>Privacy Policy</h2>

        <h3>Last Updated: September 8, 2023</h3>

        <p>
          This Privacy Policy describes how Jess Personal Training collects,
          uses, and discloses your Personal Information when you visit or use
          our jesstrainer.de.
        </p>

        <h3>Information We Collect</h3>

        <p>
          We collect various types of information for various purposes to
          provide and improve our service to you.
        </p>

        <ul>
          <li>
            <strong>Personal Data</strong>: We may ask you to provide us with
            certain personally identifiable information that can be used to
            contact or identify you.
          </li>
          <li>
            <strong>Usage Data</strong>: We may also collect information on how
            the service is accessed and used.
          </li>
        </ul>

        <h3>How We Use Your Information</h3>

        <p>We use the collected data for various purposes:</p>

        <ul>
          <li>To provide and maintain our service.</li>
          <li>To notify you about changes to our service.</li>
          <li>
            To allow you to participate in interactive features of our service
            when you choose to do so.
          </li>
        </ul>

        <h3>Disclosure of Data</h3>

        <p>
          We may disclose your Personal Information under the following
          circumstances:
        </p>

        <ul>
          <li>
            <strong>Legal Requirements</strong>: To comply with a legal
            obligation.
          </li>
          <li>
            <strong>Transaction</strong>: In case of a sale, merger, or
            acquisition.
          </li>
        </ul>

        <h3>Security</h3>

        <p>
          The security of your data is important to us, but remember that no
          method of transmission over the Internet is 100% secure.
        </p>

        <h3>Changes to This Privacy Policy</h3>

        <p>
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page.
        </p>

        <h3>Contact Us</h3>

        <p>
          If you have any questions about this Privacy Policy, please contact
          us:
        </p>

        <ul>
          <li>By email: jess@trainer.de</li>
        </ul>
      </div>
    </Wrapper>
  )
}

export default PrivacyPolicy
