'use client'

import { useTranslations } from 'next-intl'
import styles from '../home.module.scss'

const ForWhomSection: React.FC = () => {
  const t = useTranslations('home.forWhom')
  const items = Object.values(t.raw('items')) as string[]

  return (
    <section className={styles.forWhomSection}>
      <div className={styles.forWhomContainer}>
        <h2 className={styles.forWhomHeading}>{t('heading')}</h2>
        <ul className={styles.forWhomList}>
          {items.map((item, i) => (
            <li key={i} className={styles.forWhomItem}>
              <span className={styles.forWhomCheck}>&#10003;</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ForWhomSection
