import ScrollArrow from 'app/(pages)/about/scroll-arrow'
import Link from 'next/link'
import styles from '../home.module.scss'

const HeroSection: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroLeft}>
        <h1 className={styles.heroTitle}>
          DU HAST ES SCHON
          <br />
          HUNDERTMAL
          <br />
          <span className={styles.heroTitleAccent}>VERSUCHT.</span>
        </h1>
        <p className={styles.heroSubtitle}>
          Personal Training, Coaching und individuelle Trainingspläne in Berlin
          — für Menschen, die es leid sind, immer wieder von vorne anzufangen.
        </p>
        <div className={styles.heroCtas}>
          <Link href="#cta" className={styles.primaryBtn}>
            Jetzt kostenlosen Call buchen &rarr;
          </Link>
          <Link href="#angebote" className={styles.secondaryBtn}>
            Angebote ansehen
          </Link>
        </div>
      </div>
      <div className={styles.heroRight}>
        <div className={styles.heroImageMain}>
          <div className={styles.placeholderImage}>
            <span>Trainer Foto</span>
          </div>
        </div>
      </div>
      <ScrollArrow />
    </section>
  )
}

export default HeroSection
