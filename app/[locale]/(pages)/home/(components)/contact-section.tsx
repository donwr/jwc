import { useTranslations } from 'next-intl'
import ContactFormClient from '../../contact/contact-form-client'
import styles from '../home.module.scss'

export default function ContactSection() {
  const t = useTranslations('home.apply')

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.contactInner}>
        <div className={styles.contactLeft}>
          <p className={styles.contactLabel}>{t('label')}</p>
          <h2 className={styles.contactHeading}>{t('heading')}</h2>
          <p className={styles.contactSubheading}>{t('subheading')}</p>
          <div className={styles.contactMeta}>
            <a
              href="mailto:jess@rismofitness.com"
              className={styles.contactMetaItem}
            >
              jess@rismofitness.com
            </a>
            <a href="tel:+4915679614147" className={styles.contactMetaItem}>
              +49 156 79614147
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
