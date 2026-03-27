'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../home.module.scss'

const PersonalTrainerIntro: React.FC = () => {
  const t = useTranslations('home.about')

  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        <h2 className={styles.aboutHeading}>
          {t('heading')}
        </h2>

        <div className={styles.aboutImageRow}>
          <div className={styles.aboutImageSmall}>
            <Image
              src="/about-01.jpg"
              alt={t('imageAlt1')}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className={styles.aboutBody}>
            <p>{t('description')}</p>
            <Link href="#cta" className={styles.pillBtn}>
              {t('button')}
            </Link>
          </div>
          <div className={styles.aboutImageSmall}>
            <Image
              src="/about-02.jpg"
              alt={t('imageAlt2')}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default PersonalTrainerIntro
