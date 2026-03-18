'use client'
import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react'

interface Toast {
  id: string
  message: string
  options?: any
}

interface ToastContextType {
  toasts: Toast[]
  addToast: (message: string, options?: any) => void
  removeToast: (id: string) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext)
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}

interface ToastProviderProps {
  children: ReactNode
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = useCallback((message: string, options = {}) => {
    const id = Math.random().toString(36).substr(2, 9)
    setToasts((currentToasts) => [...currentToasts, { id, message, options }])
  }, [])

  const removeToast = useCallback((id: string) => {
    setToasts((currentToasts) =>
      currentToasts.filter((toast) => toast.id !== id),
    )
  }, [])

  return (
    <ToastContext.Provider value={{ addToast, removeToast, toasts }}>
      {children}
    </ToastContext.Provider>
  )
}
