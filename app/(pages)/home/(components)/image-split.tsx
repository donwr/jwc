import Link from 'next/link'
import styles from '../home.module.scss'

const ImageSplitSection: React.FC = () => {
  return (
    <section className={styles.splitSection}>
      <div className={styles.splitLeft}>
        <div className={styles.placeholderImageTall}>
          <span>Training Session</span>
        </div>
        <Link href="#cta" className={styles.splitBtn}>
          Call buchen
        </Link>
      </div>
      <div className={styles.splitRight}>
        <div className={styles.placeholderImageTall}>
          <span>Gym / Equipment</span>
        </div>
        <Link href="#angebote" className={styles.splitBtn}>
          Angebote ansehen
        </Link>
      </div>
    </section>
  )
}

export default ImageSplitSection
