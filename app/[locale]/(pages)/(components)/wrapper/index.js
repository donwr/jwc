import s from 'app/(pages)/(components)/wrapper/wrapper.module.scss'
import cn from 'clsx'
import { Cart } from 'libs/shopify/cart'
import { Footer } from '../footer'
import { Lenis } from '../lenis'
import { Navigation } from '../navigation'
import Menu from '../navigation/menu/Menu'
import MenuManager from '../navigation/menu/MenuManager'
// import { ShowCart } from '../shopify/show-cart'
import WorkoutMenu from '../workout-menu'

export function Wrapper({
  children,
  theme = 'light',
  lenis = true,
  lenisOptions = {},
  className,
}) {
  return (
    <>
      {lenis && <Lenis root options={lenisOptions} />}

      <div className={cn(s.wrapper, `theme-${theme}`, className)}>
        <Navigation />

        <Cart>
          {/* <ShowCart className={s.cart} /> */}
          <MenuManager>
            <Menu />
          </MenuManager>
          <main role="main" className={s.main}>
            {children}
          </main>
        </Cart>
        <WorkoutMenu />
        <Footer />
      </div>
    </>
  )
}
