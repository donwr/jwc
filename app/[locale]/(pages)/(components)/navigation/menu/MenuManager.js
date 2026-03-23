'use client'
import { createContext, useState } from 'react'

// Create the context
export const MenuContext = createContext()

export default function MenuManager({ children }) {
  const [open, setOpen] = useState(false)

  return (
    <MenuContext.Provider value={{ open, setOpen }}>
      {children}
    </MenuContext.Provider>
  )
}
