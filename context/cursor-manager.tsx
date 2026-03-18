'use client'
import React, { useState } from 'react'
import CustomCursorContext, { CursorLookType } from './custom-cursor-context'

const CustomCursorManager = ({ children }: { children: React.ReactNode }) => {
  const [type, setTypeState] = useState<CursorLookType>('default')
  const [title, setTitle] = useState<string>('')
  const [size, setSize] = useState<number>(16)

  const setType = (
    newType: CursorLookType,
    newTitle: string = '',
    newImageUrl: string = '',
    newSize: number = 16,
  ) => {
    setTypeState(newType)
    setTitle(newTitle)
    setSize(newSize) // Update size state
  }

  return (
    <CustomCursorContext.Provider value={{ type, title, size, setType }}>
      {children}
    </CustomCursorContext.Provider>
  )
}

export default CustomCursorManager
