// components/ScrollArrow.tsx
'use client'

import { ArrowDown } from '@phosphor-icons/react/dist/ssr'
import { useEffect } from 'react'
import s from './scroll-arrow.module.scss'

export default function ScrollArrow() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const element = document.getElementById('start')
    if (element) {
      const headerOffset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <a href="#start" onClick={handleScrollClick} className={s.arrowDown}>
      <ArrowDown size={24} />
    </a>
  )
}
