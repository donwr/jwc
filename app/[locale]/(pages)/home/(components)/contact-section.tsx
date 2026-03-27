import ContactFormClient from '../../contact/contact-form-client'
import styles from '../home.module.scss'

export default function ContactSection() {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.contactInner}>
        <div className={styles.contactLeft}>
          <p className={styles.contactLabel}>Contact</p>
          <h2 className={styles.contactHeading}>Get in<br />Touch</h2>
          <p className={styles.contactSubheading}>
            Send me a message and I&apos;ll get back to you as soon as possible.
          </p>
          <div className={styles.contactMeta}>
            <a href="mailto:jess@trainer.de" className={styles.contactMetaItem}>
              jess@trainer.de
            </a>
          </div>
        </div>
        <div className={styles.contactRight}>
          <ContactFormClient />
        </div>
      </div>
    </section>
  )
}
