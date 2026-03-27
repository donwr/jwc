'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import CalButton from 'app/(pages)/(components)/buttons/cal-button'
import styles from '../home.module.scss'

const CTASection: React.FC = () => {
  const t = useTranslations('home.cta')

  return (
    <section id="cta" className={styles.ctaSection}>
      <div className={styles.ctaContainer}>
        <h2 className={styles.ctaHeading}>
          {t('titleLine1')}
          <br />
          {t('titleLine2')}
          <br />
          <span className={styles.ctaHeadingAccent}>
            {t('titleAccent')}
          </span>
        </h2>
        <p className={styles.ctaSubheading}>
          {t('subtitle')}
        </p>
        <div className={styles.ctaButtons}>
          <CalButton
            text={t('primaryButton')}
            calLink="jesstrainer/erstgespraech"
            calConfig='{"layout":"month_view"}'
            className={styles.primaryBtn}
          />
        </div>
      </div>
    </section>
  )
}

export default CTASection
