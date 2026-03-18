'use client'

import styles from '../home.module.scss'

const MarqueeSection: React.FC = () => {
  const items = [
    'STRUKTUR',
    'DRANBLEIBEN',
    'COACHING',
    'RESULTATE',
    'KRAFTAUFBAU',
    'PROGRESSION',
  ]

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
