'use client'
import { XCircle } from '@phosphor-icons/react'
import { useToast } from 'context/toast-context'
import { gsap } from 'gsap'
import React, { useEffect, useRef } from 'react'
import styles from './toast.module.scss'

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useToast()
  const toastRefs = useRef<(HTMLDivElement | null)[]>([])

  // Handle mounting animation for toasts using GSAP
  useEffect(() => {
    if (toastRefs.current) {
      toastRefs.current.forEach((toast, index) => {
        if (toast) {
          gsap.fromTo(
            toast,
            { opacity: 0, scale: 0.5 },
            { opacity: 1, scale: 1, duration: 0.5, delay: index * 0.1 },
          )
        }
      })
    }
  }, [toasts])

  const handleRemoveToast = (id: string, index: number) => {
    // Animation to remove toast
    if (toastRefs.current[index]) {
      gsap.to(toastRefs.current[index], {
        opacity: 0,
        scale: 0.5,
        duration: 0.5,
        onComplete: () => removeToast(id),
      })
    }
  }

  return (
    <div className={styles.toastContainer}>
      {toasts.map((toast, index) => (
        <div
          key={toast.id}
          ref={(el) => {
            toastRefs.current[index] = el
          }}
          className={styles.toast}
        >
          {toast.message}
          <button
            aria-label="Close Toast"
            className={styles.closeButton}
            onClick={() => handleRemoveToast(toast.id, index)}
          >
            <XCircle size={20} />
          </button>
        </div>
      ))}
    </div>
  )
}
