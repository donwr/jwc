'use client'
import { getCalApi } from '@calcom/embed-react'
import cn from 'clsx'
import { useEffect } from 'react'
import { Button } from './button'
import styles from './button.module.scss'

export default function CalButton({
  className,
  text = 'JOIN A WORKOUT',
  size = 'medium',
  disabled = false,
  calLink = '', // Accepting calLink prop
  calConfig = '', // Accepting calConfig prop
  ...props // Other button-specific props
}) {
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
    <Button
      className={cn(className, styles.button, styles[size], {
        [styles.disabled]: disabled,
      })}
      text={text}
      aria-label="workout session"
      data-cal-link={calLink}
      data-cal-config={calConfig}
      size={size} // Apply size prop
      disabled={disabled} // Pass disabled prop
      {...props} // Additional props for customization
    />
  )
}
