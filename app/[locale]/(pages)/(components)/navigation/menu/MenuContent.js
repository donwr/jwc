'use client'
import cn from 'clsx'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import Image from 'next/image'
import { useContext } from 'react'
import s from './menu-content.module.scss'
import { MenuContext } from './MenuManager'

export default function MenuContent() {
  const { open, setOpen } = useContext(MenuContext)
  const t = useTranslations('nav')

  const LINKS = [
    { href: '/#about', label: t('about') },
    { href: '/#angebote', label: t('offers') },
    { href: '/#faq', label: t('faq') },
    { href: '/#contact', label: t('contact') },
  ]

  return (
    <div className={cn(s.menuOverlay, { [s.menuOverlayOpen]: open })}>
      {/* Top bar */}
      <div className={s.menuTopBar}>
        <Image src="/logo.svg" alt="JWC" width={48} height={32} />
        <button
          className={s.closeBtn}
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>
      </div>

      {/* Nav links */}
      <nav className={s.menuNav}>
        <ul>
          {LINKS.map((link) => (
            <li key={link.href} className={s.menuNavItem}>
              <Link
                href={link.href}
                className={s.menuNavLink}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom bar */}
      <div className={s.menuBottom}>
        <a href="mailto:jess@trainer.de" className={s.menuEmail}>
          jess@trainer.de
        </a>
        <div className={s.menuWordmark}>JWC</div>
      </div>
    </div>
  )
}
