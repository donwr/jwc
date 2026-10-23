'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import s from './banner.module.scss'

export function Banner() {
  const t = useTranslations('banner')

  return (
    <Link href="/#contact" className={s.banner}>
      {t('text')} <strong>&rarr; {t('cta')}</strong>
    </Link>
  )
}
