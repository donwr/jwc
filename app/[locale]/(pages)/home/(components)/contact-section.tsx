import { useLocale, useTranslations } from 'next-intl'
import CalButton from '../../(components)/buttons/cal-button'
import { getIntroCalLink } from '../../(data)/booking'
import ContactFormClient from '../../contact/contact-form-client'
import styles from '../home.module.scss'

export default function ContactSection() {
  const t = useTranslations('home.apply')
  const locale = useLocale()

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.contactInner}>
        <div className={styles.contactLeft}>
          <p className={styles.contactLabel}>{t('label')}</p>
          <h2 className={styles.contactHeading}>{t('heading')}</h2>
          <p className={styles.contactSubheading}>{t('subheading')}</p>
          <div className={styles.contactBook}>
            <p className={styles.contactBookText}>{t('bookIntroText')}</p>
            <CalButton
              text={`${t('bookIntro')} →`}
              calLink={getIntroCalLink(locale)}
              calConfig='{"layout":"month_view"}'
              className={styles.contactBookButton}
            />
          </div>
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
