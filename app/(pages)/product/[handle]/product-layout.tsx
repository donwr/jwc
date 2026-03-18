'use client'
import React, { useEffect, useRef } from 'react'
import styles from './product-layout.module.scss'

import { SizeAndBuy } from 'app/(pages)/(components)/shopify/size-and-buy'
import { Product } from 'libs/shopify/types'
import Link from 'next/link'

interface ProductCardProps {
  product: Product
}

const ProductLayout: React.FC = ({ product }: ProductCardProps) => {
  const { title, images, priceRange, description } = product
  const minPrice = parseFloat(priceRange.minVariantPrice.amount).toFixed(2) // Format to 2 decimal places
  const maxPrice = parseFloat(priceRange.maxVariantPrice.amount).toFixed(2) // Format to 2 decimal places
  const currencyCode = priceRange.minVariantPrice.currencyCode
  // const [isShippingInfoOpen, setIsShippingInfoOpen] = useState(false)

  const imagesContainerRef = useRef<HTMLDivElement>(null)

  // Prevent page scroll and direct scroll to the container
  useEffect(() => {
    const imagesContainer = imagesContainerRef.current

    const preventPageScroll = (e: WheelEvent) => {
      if (imagesContainer && imagesContainer.contains(e.target as Node)) {
        e.preventDefault()
        imagesContainer.scrollBy({
          top: e.deltaY, // Scroll vertically
        })
      }
    }

    window.addEventListener('wheel', preventPageScroll, { passive: false })

    return () => {
      window.removeEventListener('wheel', preventPageScroll)
    }
  }, [])

  return (
    <div className={styles.productPage}>
      <div className={styles.imagesContainer} data-lenis-prevent="true">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={image.altText || title}
            className={styles.productImage}
          />
        ))}
      </div>

      <div className={styles.productInfo}>
        <div className={styles.helpText}>
          <Link href="/contact">[NEED HELP?]</Link>
        </div>
        <p className={styles.productName}>{title}</p>
        <p className={styles.price}>
          {minPrice === maxPrice
            ? `${minPrice} ${currencyCode}`
            : `${minPrice} - ${maxPrice} ${currencyCode}`}{' '}
        </p>

        <div className={styles.editorsNote}>
          <h2>PRODUCT DETAILS</h2>
          <p>{description}</p>
        </div>

        {/* <div className={styles.expandableSection}>
          <button
            className={styles.expandableButton}
            onClick={() => setIsShippingInfoOpen(!isShippingInfoOpen)}
          >
            SHIPPING [{isShippingInfoOpen ? '-' : '+'}]
          </button>
          {isShippingInfoOpen && (
            <div className={styles.expandableContent}>
              <p>Shipping information and policies would go here.</p>
            </div>
          )}
        </div> */}
        <SizeAndBuy product={product} />
      </div>
    </div>
  )
}

export default ProductLayout
