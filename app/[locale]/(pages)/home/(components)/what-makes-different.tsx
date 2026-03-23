'use client'

import { useTranslations } from 'next-intl'
import styles from '../home.module.scss'

const WhatMakesDifferentSection: React.FC = () => {
  const t = useTranslations('home.whatMakesDifferent')
  const items = Object.values(t.raw('items')) as string[]

  return (
    <section className={styles.whatMakesDifferentSection}>
      <div className={styles.whatMakesDifferentContainer}>
        <h2 className={styles.whatMakesDifferentHeading}>{t('heading')}</h2>
        <div className={styles.whatMakesDifferentGrid}>
          {items.map((item, i) => (
            <div key={i} className={styles.whatMakesDifferentCard}>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatMakesDifferentSection
