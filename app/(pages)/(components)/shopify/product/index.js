'use client'
import { SizeAndBuy } from '../size-and-buy'
import s from './product.module.scss'
export const Product = ({ product }) => {
  const { title, images, priceRange } = product

  if (!product) {
    return <div>Loading...</div>
  }
  return (
    <div className={s.productCard}>
      <div className={s.productTop}>
        <div className={s.productButtons}></div>
        <div className={s.productImage}>
          {images.map((image, index) => (
            <img key={index} src={image.url} alt={image.altText || title} />
          ))}
        </div>
      </div>
      <aside className={s.productDetails}>
        <p className={s.category}>
          <span>{/* You can add a category dynamically if available */}</span>{' '}
          <span className={s.separator}></span>
          <span>BASICS</span>
        </p>
        <div className={s.productInfo}>
          <p className={s.productName}>{title}</p>
          <p className={s.productPrice}>
            {priceRange.minVariantPrice.amount} -{' '}
            {priceRange.maxVariantPrice.amount}{' '}
            {priceRange.minVariantPrice.currencyCode}
          </p>
        </div>
      </aside>
      <SizeAndBuy product={product} />
    </div>
  )
}

export default Product
