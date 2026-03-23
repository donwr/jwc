'use client'
import Link from 'next/link'
import s from './product-card.module.scss'

export const ProductCard = ({ product }) => {
  const { title, images, priceRange, handle } = product
  if (!product) {
    return <div>Loading...</div>
  }
  const minPrice = parseFloat(priceRange.minVariantPrice.amount).toFixed(2) // Format to 2 decimal places
  const maxPrice = parseFloat(priceRange.maxVariantPrice.amount).toFixed(2) // Format to 2 decimal places
  const currencyCode = priceRange.minVariantPrice.currencyCode

  return (
    <Link href={`/product/${handle}`} className={s.productCard}>
      <div className={s.productTop}>
        <div className={s.productButtons}></div>
        <div className={s.productImage}>
          <img src={images[0]?.url} alt={images[0]?.altText || title} />
        </div>
      </div>
      <aside className={s.productDetails}>
        <p className={s.category}>
          <span>BASICS</span>
        </p>
        <div className={s.productInfo}>
          <p className={s.productName}>{title}</p>
          <p className={s.productPrice}>
            {minPrice === maxPrice
              ? `${minPrice} ${currencyCode}`
              : `${minPrice} - ${maxPrice} ${currencyCode}`}
          </p>
        </div>
      </aside>
    </Link>
  )
}

export default ProductCard
