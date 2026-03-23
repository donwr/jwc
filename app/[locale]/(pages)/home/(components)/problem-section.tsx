import styles from '../home.module.scss'

const ProblemSection: React.FC = () => {
  return (
    <section className={styles.problemSection}>
      <div className={styles.problemLayout}>
        <div className={styles.problemImageCol}>
          <div className={styles.placeholderImageTall}>
            <span>Motivation Foto</span>
          </div>
        </div>
        <div className={styles.problemTextCol}>
          <h2 className={styles.problemHeading}>
            DU BRAUCHST KEINE
            <br />
            <span className={styles.problemHeadingAccent}>
              MOTIVATION.
            </span>
            <br />
            DU BRAUCHST EIN SYSTEM.
          </h2>
          <p>
            Die meisten Leute denken, sie scheitern an Disziplin. Stimmt nicht.
            Sie scheitern an fehlendem Plan, fehlender Struktur und daran, dass
            niemand da ist, der merkt, wenn sie aufhören.
          </p>
          <p>
            Motivation bringt dich durch Tag eins. Struktur bringt dich durch
            Tag hundert. Genau da setze ich an.
          </p>
          <div className={styles.focusAreas}>
            <span>Kraftaufbau</span>
            <span>Abnehmen</span>
            <span>Funktionelles Training</span>
            <span>Calisthenics</span>
            <span>Mobility</span>
            <span>Stabilität</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemSection
