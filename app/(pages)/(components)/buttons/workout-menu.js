'use client'
import { useWorkoutMenu } from 'context/workout-menu-context'
import buttonStyles from '../../(components)/buttons/button.module.scss'
import { Button } from './button'

export default function ToggleWorkoutMenu() {
  const { openWorkoutMenu } = useWorkoutMenu()

  return (
    <Button
      text="ANGEBOTE ANSEHEN"
      onClick={openWorkoutMenu}
      className={buttonStyles.button}
    />
  )
}
