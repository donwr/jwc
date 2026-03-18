'use client'
import { createContext, useContext, useEffect, useState } from 'react'

const NavContext = (createContext < NavContextType) | (undefined > undefined)
export const NavProvider = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const toggleNav = () => setIsNavOpen(!isNavOpen)

  useEffect(() => {
    // When the nav is open, prevent body from scrolling
    if (isNavOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      // Restore scrolling when nav is closed
      document.body.style.overflow = ''
    }

    // Cleanup function to restore scroll on component unmount
    return () => {
      document.body.style.overflow = ''
    }
  }, [isNavOpen])

  return (
    <NavContext.Provider value={{ isNavOpen, toggleNav, setIsNavOpen }}>
      {children}
    </NavContext.Provider>
  )
}

export const useNav = () => {
  const context = useContext(NavContext)
  if (context === undefined) {
    throw new Error('useNav must be used within a NavProvider')
  }
  return context
}
