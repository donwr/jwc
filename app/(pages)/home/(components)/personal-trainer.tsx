import Link from 'next/link'
import styles from '../home.module.scss'

const PersonalTrainerIntro: React.FC = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        <h2 className={styles.aboutHeading}>
          INDIVIDUELLES COACHING,
          <br />
          <span className={styles.aboutHeadingAccent}>DAS ZU DIR PASST</span>
        </h2>

        <div className={styles.aboutImageRow}>
          <div className={styles.aboutImageSmall}>
            <div className={styles.placeholderImageDark}>
              <span>Training</span>
            </div>
          </div>
          <div className={styles.aboutBody}>
            <p>
              Ich bin Jess, Personal Trainer in Berlin mit Background im
              Leistungs- und Athletikbereich. Ich arbeite mit Leuten, die schon
              oft angefangen und wieder aufgehört haben — und endlich ein System
              brauchen, das hält.
            </p>
            <Link href="#cta" className={styles.pillBtn}>
              Mehr erfahren
            </Link>
          </div>
          <div className={styles.aboutImageSmall}>
            <div className={styles.placeholderImage}>
              <span>Coaching</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PersonalTrainerIntro
