'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
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
            <div className={styles.placeholderImageDark}>
              <span>{t('imageAlt1')}</span>
            </div>
          </div>
          <div className={styles.aboutBody}>
            <p>{t('description')}</p>
            <Link href="#cta" className={styles.pillBtn}>
              {t('button')}
            </Link>
          </div>
          <div className={styles.aboutImageSmall}>
            <div className={styles.placeholderImage}>
              <span>{t('imageAlt2')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PersonalTrainerIntro
