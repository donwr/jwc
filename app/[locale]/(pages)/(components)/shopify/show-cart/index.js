'use client'

import { ShoppingCartSimple } from '@phosphor-icons/react'
import cn from 'clsx'
import { useCartModal } from 'libs/shopify/cart/modal'
import s from './show-cart.module.scss' // Import the CSS module

export const ShowCart = ({ className }) => {
  const openCart = useCartModal()

  return (
    <button onClick={openCart} className={cn(className, s.cartButton)}>
      <ShoppingCartSimple size={20} />
    </button>
  )
}
