'use client'

import styles from '../home.module.scss'

const TestimonialsPlaceholder: React.FC = () => {
  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.testimonialsContainer}>
        <p className={styles.testimonialsLabel}>TESTIMONIALS</p>
        <h2 className={styles.testimonialsHeading}>
          WAS MEINE KLIENTEN SAGEN
        </h2>
        <p className={styles.testimonialsNote}>
          Hier erscheinen bald echte Erfahrungsberichte von Klienten.
        </p>
      </div>
    </section>
  )
}

export default TestimonialsPlaceholder
