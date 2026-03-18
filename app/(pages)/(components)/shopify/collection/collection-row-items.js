'use client'
import { useEffect, useState } from 'react' // Import useEffect
import { ProductCardSkeleton } from '../../skeletons/product-card-skeleton'
import { ProductCard } from '../product/product-card'
import s from './collection.module.scss'

export default function CollectionItems({ category }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    if (category) {
      setIsLoading(false) // Set loading to false after products are loaded or checked
    }
  }, [category])

  return (
    <div>
      {/* Collection Items */}
      {!isLoading ? (
        category.length > 0 ? (
          <div className="px-4">
            <div className={`layout-grid ${s.grid}`}>
              {category.map((product) => (
                <div className={s.slide} key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          // Display message when there are no products
          <p>No items found</p>
        )
      ) : (
        // Display skeleton loaders if content is loading
        <div className="no-scrollbar flex w-full overflow-x-scroll">
          {Array.from({ length: 6 }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
        </div>
      )}
    </div>
  )
}
