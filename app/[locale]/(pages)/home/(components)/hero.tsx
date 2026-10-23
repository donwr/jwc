'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import Image from 'next/image'
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
        <p className={styles.heroSubtitle}>{t('subtitle')}</p>
        <div className={styles.heroCtas}>
          <Link href="#contact" className={styles.primaryBtn}>
            {t('ctaButton')} &rarr;
          </Link>
          <Link href="#angebote" className={styles.secondaryBtn}>
            {t('offersButton')}
          </Link>
        </div>
        <ul className={styles.heroTrust}>
          {(t.raw('trust') as string[]).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className={styles.heroRight}>
        <div className={styles.heroImageMain}>
          <Image
            src="/hero.jpg"
            alt={t('imageAlt')}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
      </div>
      <ScrollArrow />
    </section>
  )
}

export default HeroSection
