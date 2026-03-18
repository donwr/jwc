'use client'

import cn from 'clsx'
import { Link } from 'components/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import s from './navigation.module.scss'

export const LINKS = [
  { href: '/#angebote', label: 'Angebote' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/contact', label: 'Kontakt' },
]

export function Navigation() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className={cn(s.nav, { [s.scrolled]: isScrolled })}>
      <div className={s.navWrapper}>
        <div className={s.group}>
          <Link href="/">
            <span className={s.logoText}>JESS</span>
          </Link>
        </div>

        <ul className={s.list}>
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  'link',
                  s.link,
                  pathname === link.href && s.active,
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className={s.contact}>
          <Link className={s.bookBtn} href={'#cta'}>
            Call buchen
          </Link>
        </div>
      </div>
    </nav>
  )
}
