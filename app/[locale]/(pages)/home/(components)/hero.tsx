'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import ScrollArrow from 'app/(pages)/about/scroll-arrow'
import styles from '../home.module.scss'

const HeroSection: React.FC = () => {
  const t = useTranslations('home.hero')

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroLeft}>
        <h1 className={styles.heroTitle}>
          {t('titleLine1')}
          <br />
          <span className={styles.heroTitleAccent}>{t('titleAccent')}</span>
        </h1>
        <p className={styles.heroSubtitle}>
          {t('subtitle')}
        </p>
        <p className={styles.heroSubtitle}>
          {t('description')}
        </p>
        <div className={styles.heroCtas}>
          <Link href="#cta" className={styles.primaryBtn}>
            {t('ctaButton')} &rarr;
          </Link>
          <Link href="#angebote" className={styles.secondaryBtn}>
            {t('offersButton')}
          </Link>
        </div>
      </div>
      <div className={styles.heroRight}>
        <div className={styles.heroImageMain}>
          <div className={styles.placeholderImage}>
            <span>{t('imageAlt')}</span>
          </div>
        </div>
      </div>
      <ScrollArrow />
    </section>
  )
}

export default HeroSection
