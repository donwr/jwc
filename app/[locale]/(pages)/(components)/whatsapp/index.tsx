'use client'

import { WhatsappLogo } from '@phosphor-icons/react'
import { useTranslations } from 'next-intl'
import s from './whatsapp.module.scss'

export function WhatsAppButton() {
  const t = useTranslations('whatsapp')

  return (
    <a
      href="https://wa.me/4915679614147"
      target="_blank"
      rel="noopener noreferrer"
      className={s.button}
      aria-label={t('label')}
      title={t('label')}
    >
      <WhatsappLogo size={28} weight="fill" />
    </a>
  )
}
