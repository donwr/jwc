'use client'

import { workoutCategories } from 'app/(pages)/(data)/workout-data'
import cn from 'clsx'
import { useWorkoutMenu } from 'context/workout-menu-context'
import { useEffect } from 'react'
import CalButton from '../buttons/cal-button'
import s from './workout-menu.module.scss'

export default function WorkoutMenu() {
  const { isOpen, closeWorkoutMenu } = useWorkoutMenu()

  useEffect(() => {
    if (isOpen) {
      document.documentElement.classList.add('lenis-stopped')
    } else {
      document.documentElement.classList.remove('lenis-stopped')
    }

    return () => {
      document.documentElement.classList.remove('lenis-stopped')
    }
  }, [isOpen])

  return (
    <div className={cn(s.modal, { [s.open]: isOpen })}>
      <div className={s.overlay} onClick={closeWorkoutMenu} />
      <div className={cn(s.inner, { [s.open]: isOpen })} data-lenis-prevent>
        <button className={s.close} onClick={closeWorkoutMenu}>
          Schließen
        </button>
        <h2 className={s.heading}>Angebote</h2>
        <ul className={s.workoutList}>
          {workoutCategories.map((offer) => (
            <li key={offer.id} className={s.workoutItem}>
              <div className={s.group}>
                <div className={s.icon}>{offer.icon}</div>
                <h3 className={s.programTitle}>{offer.program}</h3>
              </div>
              <p className={s.details}>{offer.description}</p>

              <div className={s.buttons}>
                <CalButton
                  calLink={offer.calendar.calLink}
                  calConfig={offer.calendar.calConfig}
                  text="CALL BUCHEN"
                  className={''}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
