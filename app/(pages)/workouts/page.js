import { ArrowRight } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import { Wrapper } from '../(components)/wrapper'
import { workoutCategories } from '../(data)/workout-data'
import s from './workouts.module.scss'

export default function Workouts() {
  return (
    <Wrapper theme="dark" className={s.page}>
      <div className={s.hero}>
        <div className={s.backgroundCover}></div>
        <div className={s.content}>
          <h1 className={s.h1}>
            Personal Training, Trainingspläne & Online-Coaching in Berlin
          </h1>
          <p className={s.description}>
            Individuelles Training mit Struktur, Progression und echtem
            Coaching.
          </p>
        </div>
      </div>
      <section>
        <h2 className={s.h2}>Meine Angebote</h2>
        <div className={`${s.workouts}`}>
          {workoutCategories.map((offer, index) => (
            <Link href={`/#angebote`} key={index} className={s.workoutCard}>
              <div className={s.workoutCardIcon}>{offer.icon}</div>
              <div className={s.workoutDetails}>
                <p className={s.program}>{offer.program}</p>
                <p>{offer.type}</p>
                <p>{offer.duration}</p>
              </div>
              <ArrowRight className={s.arrowRight} size={24} />
            </Link>
          ))}
        </div>
      </section>
    </Wrapper>
  )
}
