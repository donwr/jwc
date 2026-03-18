'use client'
import React, { createContext, useContext, useState } from 'react'

interface WorkoutMenuContextProps {
  openWorkoutMenu: () => void
  closeWorkoutMenu: () => void
  isOpen: boolean
}

const WorkoutMenuContext = createContext<WorkoutMenuContextProps | undefined>(
  undefined,
)

export const WorkoutMenuProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const openWorkoutMenu = () => setIsOpen(true)
  const closeWorkoutMenu = () => setIsOpen(false)

  return (
    <WorkoutMenuContext.Provider
      value={{ openWorkoutMenu, closeWorkoutMenu, isOpen }}
    >
      {children}
    </WorkoutMenuContext.Provider>
  )
}

export const useWorkoutMenu = (): WorkoutMenuContextProps => {
  const context = useContext(WorkoutMenuContext)
  if (!context) {
    throw new Error('useWorkoutMenu must be used within a WorkoutMenuProvider')
  }
  return context
}
