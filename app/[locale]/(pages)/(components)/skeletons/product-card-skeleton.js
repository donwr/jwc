'use client'
import { TShirt } from '@phosphor-icons/react'
import s from './product-card-skeleton.module.scss'

export const ProductCardSkeleton = ({ className }) => {
  return (
    <div className={`${s.productCardSkeleton} ${className}`}>
      <div className={s.productTop}>
        <div className={s.productImage}>
          <div className={s.skeletonImage}>
            <TShirt size={24} />
          </div>
        </div>
      </div>
      <aside className={s.productDetails}>
        <p className={s.category}>
          <span className={s.separator}></span>
          <span className={s.separator}></span>
          <span className={s.separator}></span>
        </p>
      </aside>
    </div>
  )
}

export default ProductCardSkeleton
