'use client'

import { useTranslations } from 'next-intl'
import styles from '../home.module.scss'

const MarqueeSection: React.FC = () => {
  const t = useTranslations('home.marquee')
  const items = Object.values(t.raw('items')) as string[]
  const repeated = [...items, ...items, ...items, ...items]

  return (
    <section className={styles.marqueeSection}>
      <div className={styles.marqueeTrack}>
        {repeated.map((item, i) => (
          <span key={i} className={styles.marqueeItem}>
            {item} <span className={styles.marqueeStar}>&#10038;</span>{' '}
          </span>
        ))}
      </div>
    </section>
  )
}

export default MarqueeSection
