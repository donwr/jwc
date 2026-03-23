'use client'

import cn from 'clsx'
import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '../../../../../i18n/navigation'
import s from './language-toggle.module.scss'

export function LanguageToggle() {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  const switchTo = locale === 'de' ? 'en' : 'de'

  const handleSwitch = () => {
    router.replace(pathname, { locale: switchTo })
  }

  return (
    <button className={s.toggle} onClick={handleSwitch} aria-label="Switch language">
      <span className={cn(s.lang, { [s.active]: locale === 'de' })}>DE</span>
      <span className={s.separator}>/</span>
      <span className={cn(s.lang, { [s.active]: locale === 'en' })}>EN</span>
    </button>
  )
}
