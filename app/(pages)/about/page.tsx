import { Wrapper } from '../(components)/wrapper'
import s from './about.module.scss'
import ScrollArrow from './scroll-arrow'

export default function AboutPage() {
  return (
    <Wrapper theme="dark" className={s.page}>
      {/* Section I: Hero */}
      <div className={s.heroSection}>
        <div className={s.heroContent}>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', textTransform: 'uppercase' }}>
            Über Jess
          </h1>
        </div>
        <ScrollArrow />
        <div className={s.overlay} />
      </div>

      {/* Section II */}
      <section id={'start'} className={s.section}>
        <div className={s.sectionRight}>
          <h3 className={s.subheader}>Background</h3>
          <h2 className={s.header}>Leistungs- und Athletikbereich</h2>
          <p className={s.description}>
            Ich bin Jess, Personal Trainer in Berlin mit Background im
            Leistungs- und Athletikbereich. Mein Fokus liegt auf Kraftaufbau,
            allgemeiner Fitness, Abnehmen, funktionellem Training, Calisthenics,
            Stabilität und Mobility.
          </p>
          <p className={s.description}>
            Ich arbeite nicht mit planlosem Training oder
            Motivationssprüchen, sondern mit Struktur, Progression und einem
            System, das zu dir passt.
          </p>
        </div>
      </section>

      {/* Section III */}
      <section className={s.section}>
        <div className={s.sectionLeft}>
          <h3 className={s.subheader}>Mein Ansatz</h3>
          <h2 className={s.header}>Struktur statt Motivation</h2>
          <p className={s.description}>
            Ich arbeite mit Leuten, die schon oft angefangen und wieder
            aufgehört haben. Die nicht faul sind — sondern überfordert von
            Plänen, die nicht in ihr Leben passen, und allein gelassen mit guten
            Vorsätzen, die nach zwei Wochen verschwinden.
          </p>
          <p className={s.description}>
            Mein Job ist nicht, dich durch ein Workout zu schreien. Mein Job
            ist, mit dir eine Trainingsstruktur aufzubauen, die auch hält, wenn
            der Dienstag stressig wird, der Rücken zwickt oder du drei Tage
            nicht trainiert hast.
          </p>
        </div>
      </section>

      {/* Section IV */}
      <section className={s.section}>
        <div className={s.sectionRight}>
          <h3 className={s.subheader}>Für dich</h3>
          <h2 className={s.header}>Echtes Coaching, das passt</h2>
          <p className={s.description}>
            Egal ob du stärker werden, Fett verlieren, deine Fitness verbessern
            oder einfach wieder konstant trainieren willst — wir bauen gemeinsam
            einen Weg, den du auch wirklich durchziehen kannst.
          </p>
          <p className={s.description}>
            Kein Standardplan. Kein „Einfach durchziehen." Sondern ein System,
            das zu deinem Alltag, deinem Körper und deinem Level passt — mit
            jemandem, der mitdenkt und dranbleibt.
          </p>
        </div>
      </section>
    </Wrapper>
  )
}
