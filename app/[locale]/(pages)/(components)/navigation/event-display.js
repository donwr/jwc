'use client'
import { getCalApi } from '@calcom/embed-react'
import { ArrowUpRight } from '@phosphor-icons/react'
import { gsap } from 'gsap'
import { useEffect, useRef, useState } from 'react'
import { nextEvent as importedEventsData } from '../../(data)/next-event'
import s from './event-display.module.scss' // Import the SCSS file as a module
export const EventDisplay = () => {
  const [showNextEvent, setShowNextEvent] = useState(true)
  const eventRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      gsap.to(eventRef.current, {
        opacity: 0,
        y: 20,
        duration: 1,
        onComplete: () => {
          setShowNextEvent((prev) => !prev) // Toggle between true and false
          gsap.fromTo(
            eventRef.current,
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 1 },
          )
        },
      })
    }, 10000) // Change content every 10 seconds

    return () => clearInterval(interval)
  }, [])

  const currentEvent = importedEventsData[0]

  // Cal Embed
  useEffect(() => {
    ;(async function () {
      const cal = await getCalApi()
      cal('ui', {
        styles: { branding: { brandColor: '#000000' } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      })
    })()
  }, [])

  return (
    <>
      {importedEventsData.length > 0 && (
        <div className={s.eventDisplay}>
          <div ref={eventRef} className={s.eventContent}>
            {showNextEvent ? (
              <>
                <p className={s.eventDate}>
                  NEXT GROUP SESSION:
                  {currentEvent.date} {currentEvent.time} @
                  {currentEvent.location}
                </p>
              </>
            ) : (
              <button
                aria-label="workout session"
                data-cal-link="jesstrainer/erstgespraech"
                data-cal-config='{"layout":"month_view"}'
                className={s.otherText}
              >
                VIEW CALENDAR <ArrowUpRight size={12} />
              </button>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default EventDisplay
