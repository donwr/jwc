import styles from '../home.module.scss'

const HowItWorksSection: React.FC = () => {
  return (
    <section className={styles.howSection}>
      <div className={styles.howContainer}>
        <p className={styles.howLabel}>SO STARTEN WIR</p>
        <h2 className={styles.howHeading}>DREI SCHRITTE ZUM START</h2>
        <div className={styles.stepsGrid}>
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>01</div>
            <h3>Erstgespräch</h3>
            <p>
              Wir reden über dein Ziel, dein Level, deinen Alltag und was bisher
              nicht funktioniert hat. Kein Verkaufsgespräch — nur Klarheit.
            </p>
          </div>
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>02</div>
            <h3>Dein Plan</h3>
            <p>
              Du bekommst eine Trainingsstruktur, die auf dich zugeschnitten
              ist. Übungen, Sätze, Progression — alles klar aufgebaut.
            </p>
          </div>
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>03</div>
            <h3>Dranbleiben</h3>
            <p>
              Du trainierst. Ich bin da. Wenn etwas nicht passt, passen wir an.
              Wenn du verschwindest, melde ich mich. Das ist der Unterschied.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection
