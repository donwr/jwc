// menu-button.tsx
'use client'
import cn from 'clsx'
import { useContext } from 'react'
import { MenuContext } from './MenuManager'
import s from './menu-button.module.scss'

export default function MenuButton() {
  const { setOpen, open } = useContext(MenuContext)

  return (
    <div className={cn(s.menuButtonWrap, { [s.menuButtonWrapOpen]: open })}>
      <button
        className={cn(s.hamburger, { [s.isActive]: open })}
        onClick={() => setOpen(!open)}
        aria-label="Toggle Menu"
        type="button"
      >
        <span className={s.hamburgerBox}>
          <span className={s.hamburgerInner}></span>
        </span>
      </button>
    </div>
  )
}
