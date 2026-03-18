// ModalContext.tsx
import React, { createContext, ReactNode, useContext, useState } from 'react'

type ModalContextType = {
  openModal: string // This can be 'info', 'faq', or ''
  setOpenModal: (modalName: string) => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider')
  }
  return context
}

type ModalProviderProps = {
  children: ReactNode
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [openModal, setOpenModal] = useState<string>('')

  return (
    <ModalContext.Provider value={{ openModal, setOpenModal }}>
      {children}
    </ModalContext.Provider>
  )
}
