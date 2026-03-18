import Link from 'next/link'
import CalButton from 'app/(pages)/(components)/buttons/cal-button'
import styles from '../home.module.scss'

const CTASection: React.FC = () => {
  return (
    <section id="cta" className={styles.ctaSection}>
      <div className={styles.ctaContainer}>
        <h2 className={styles.ctaHeading}>
          DU HAST GENUG
          <br />
          NEU ANGEFANGEN.
          <br />
          <span className={styles.ctaHeadingAccent}>
            FANG AN, DRANZUBLEIBEN.
          </span>
        </h2>
        <p className={styles.ctaSubheading}>
          Ein kurzer Call. Kein Verkaufsgespräch. Wir klären, was für dich Sinn
          macht — und ob wir zusammenpassen.
        </p>
        <div className={styles.ctaButtons}>
          <CalButton
            text="Jetzt kostenlosen Call buchen"
            calLink="jesstrainer/erstgespraech"
            calConfig='{"layout":"month_view"}'
            className={styles.primaryBtn}
          />
          <Link href="#angebote" className={styles.secondaryBtn}>
            Angebot auswählen
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CTASection
