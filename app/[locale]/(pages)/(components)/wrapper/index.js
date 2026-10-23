import s from 'app/(pages)/(components)/wrapper/wrapper.module.scss'
import cn from 'clsx'
import { Cart } from 'libs/shopify/cart'
import { Banner } from '../banner'
import { Footer } from '../footer'
import { Lenis } from '../lenis'
import { Navigation } from '../navigation'
import Menu from '../navigation/menu/Menu'
import MenuManager from '../navigation/menu/MenuManager'
// import { ShowCart } from '../shopify/show-cart'
import { WhatsAppButton } from '../whatsapp'
import WorkoutMenu from '../workout-menu'

export function Wrapper({
  children,
  theme = 'light',
  lenis = true,
  lenisOptions = {},
  className,
  banner = false,
}) {
  return (
    <>
      {lenis && <Lenis root options={lenisOptions} />}

      <div
        className={cn(s.wrapper, `theme-${theme}`, className, {
          [s.hasBanner]: banner,
        })}
      >
        {banner && <Banner />}
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
        <WhatsAppButton />
        <Footer />
      </div>
    </>
  )
}
