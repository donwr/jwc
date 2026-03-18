'use client'

import Link from 'next/link'
import styles from '../home.module.scss'

const OffersSection: React.FC = () => {
  return (
    <section id="angebote" className={styles.offersSection}>
      <div className={styles.offersContainer}>
        <p className={styles.offersLabel}>ANGEBOTE</p>
        <h2 className={styles.offersHeading}>FINDE DEINEN WEG</h2>

        <div className={styles.offersGrid}>
          {/* Card 1 */}
          <div className={styles.offerCard}>
            <h3>Personal Training</h3>
            <p className={styles.offerSubtitle}>
              Für dich, wenn du allein nicht mehr weiterkommst.
            </p>
            <ul>
              <li>Sessions auf dein Ziel und Level abgestimmt</li>
              <li>Direktes Technik-Coaching in Echtzeit</li>
              <li>Anpassung an deine Tagesform</li>
              <li>Ein Mensch, der merkt, wenn du nachlässt</li>
            </ul>
            <Link href="#cta" className={styles.offerBtn}>
              Personal Training anfragen &rarr;
            </Link>
          </div>

          {/* Card 2 */}
          <div className={styles.offerCard}>
            <h3>Individueller Trainingsplan</h3>
            <p className={styles.offerSubtitle}>
              Für dich, wenn du trainieren kannst — aber nicht weisst, was.
            </p>
            <ul>
              <li>Trainingsplan für 4–6 Wochen</li>
              <li>Abgestimmt auf Ziel, Level & Equipment</li>
              <li>Klare Übungen, Sätze, Wiederholungen</li>
              <li>Fragebogen + Erstgespräch inklusive</li>
            </ul>
            <div className={styles.offerPrice}>59 €</div>
            <Link href="#cta" className={styles.offerBtn}>
              Trainingsplan starten &rarr;
            </Link>
          </div>

          {/* Card 3 */}
          <div className={`${styles.offerCard} ${styles.offerCardFeatured}`}>
            <h3>Online-Coaching</h3>
            <p className={styles.offerSubtitle}>
              Plan + jemand, der dranbleibt.
            </p>
            <div className={styles.packages}>
              <div className={styles.packageItem}>
                <strong>4 Wochen — 99 €</strong>
                <p>Trainingsplan + Erstgespräch + WhatsApp-Support + 1 Check-up</p>
              </div>
              <div className={styles.packageItem}>
                <strong>8 Wochen — 179 €</strong>
                <p>Längere Begleitung, mehrere Anpassungen möglich</p>
              </div>
              <div className={styles.packageItem}>
                <strong>12 Wochen — 249 €</strong>
                <p>Langfristige Struktur + Check-up-Calls nach Bedarf</p>
              </div>
            </div>
            <Link href="#cta" className={styles.offerBtn}>
              Online-Coaching starten &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OffersSection
