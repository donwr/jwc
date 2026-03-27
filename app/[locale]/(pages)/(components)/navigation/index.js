'use client'

import cn from 'clsx'
import { Link } from 'components/link'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { LanguageToggle } from './language-toggle'
import s from './navigation.module.scss'

export function Navigation() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const t = useTranslations('nav')

  const LINKS = [
    { href: '/#about', label: t('about') },
    { href: '/#angebote', label: t('offers') },
    { href: '/#faq', label: t('faq') },
    { href: '/#contact', label: t('contact') },
  ]

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
            <img src="/logo.svg" alt="JWC" className={s.logo} />
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
          <LanguageToggle />
          <Link className={s.bookBtn} href={'#cta'}>
            {t('bookCall')}
          </Link>
        </div>

        <div className={s.langMobile}>
          <LanguageToggle />
        </div>
      </div>
    </nav>
  )
}
