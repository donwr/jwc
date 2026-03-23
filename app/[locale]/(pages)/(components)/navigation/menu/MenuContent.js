'use client'
import cn from 'clsx'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useContext } from 'react'
import s from './menu-content.module.scss'
import { MenuContext } from './MenuManager'

export default function MenuContent() {
  const pathname = usePathname()
  const { open } = useContext(MenuContext)
  const t = useTranslations('nav')
  const tMenu = useTranslations('menu')

  const LINKS = [
    { href: '/#about', label: t('about') },
    { href: '/#angebote', label: t('offers') },
    { href: '/#faq', label: t('faq') },
    { href: '/contact', label: t('contact') },
  ]

  return (
    <div className={s.menuHolder}>
      <div className={cn(s.menuInside, { [s.menuInsideOpen]: open })}>
        <div className={s.menuNavContainer}>
          <ul className={s.internalNavLinks}>
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
          <ul className={s.externalNavLinks}>
            <li>
              <a
                href="https://twitter.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className={s.socialLink}
              >
                TW: @jesstrainer
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className={s.socialLink}
              >
                IG: @jesstrainer
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className={s.socialLink}
              >
                YT: @jesstrainer
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className={s.socialLink}
              >
                mail: jess@trainer.de
              </a>
            </li>
          </ul>
        </div>
        <div className={s.policyLinks}>
          <a href="/policy" className={s.policyLink}>
            {tMenu('privacyPolicy')}
          </a>
          <span className={s.separator}>|</span>
          <a href="/terms" className={s.policyLink}>
            {tMenu('termsOfService')}
          </a>
        </div>
      </div>
    </div>
  )
}
