'use client'

import cn from 'clsx'
import { addItem } from 'libs/shopify/cart/actions'
import { useEffect, useRef } from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import { useCartModal } from '../modal'
import s from './add-to-cart.module.scss'

export function AddToCart({ variant, className }) {
  const [, formAction] = useFormState(addItem, null)

  const actionWithVariant = formAction.bind(null, variant?.id)

  const formattedPrice = variant?.price?.amount
    ? parseFloat(variant.price.amount).toFixed(2)
    : null

  const buttonState = variant
    ? `${formattedPrice} ${variant?.price?.currencyCode} - ADD TO CART`
    : 'Select required options'

  return (
    <form action={variant ? actionWithVariant : null} className={className}>
      <ActionButton
        aria-label="Add to cart"
        defaultState={buttonState}
        pendingState="ADDING TO CART"
        disabled={!variant}
      />
    </form>
  )
}

function ActionButton({
  defaultState,
  pendingState,
  disabled = false,
  ...props
}) {
  const pendingStartRef = useRef(false)
  const { pending = false } = useFormStatus()
  const openCart = useCartModal()

  useEffect(() => {
    if (pending) {
      pendingStartRef.current = true
    }

    if (pendingStartRef.current && !pending) {
      openCart('add')
      pendingStartRef.current = false
    }
  }, [pending, openCart])

  return (
    <button
      type="submit"
      onClick={(e) => {
        if (pending) {
          e.preventDefault()
        }
      }}
      aria-disabled={pending}
      {...props}
      className={cn(
        s.cta,
        s.buyBtn,
        pending && s.disable,
        disabled && s.disable,
      )}
    >
      {pending ? pendingState : defaultState}
    </button>
  )
}
