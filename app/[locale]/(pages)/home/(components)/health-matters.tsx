'use client'

import { useTranslations } from 'next-intl'
import styles from '../home.module.scss'

const HowItWorksSection: React.FC = () => {
  const t = useTranslations('home.howItWorks')

  return (
    <section className={styles.howSection}>
      <div className={styles.howContainer}>
        <p className={styles.howLabel}>{t('label')}</p>
        <h2 className={styles.howHeading}>{t('heading')}</h2>
        <div className={styles.stepsGrid}>
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>01</div>
            <h3>{t('step1.title')}</h3>
            <p>{t('step1.description')}</p>
          </div>
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>02</div>
            <h3>{t('step2.title')}</h3>
            <p>{t('step2.description')}</p>
          </div>
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>03</div>
            <h3>{t('step3.title')}</h3>
            <p>{t('step3.description')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection
