// app/product-page.js
import { Wrapper } from 'app/(pages)/(components)/wrapper'
import ProductMetaFetcher from 'app/(pages)/product/[handle]/product-meta-fetcher'
import { getProduct, getProductRecommendations } from 'libs/shopify'
import dynamic from 'next/dynamic'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import ProductLayout from './product-layout'
import s from './product-page.module.scss'

export const runtime = 'edge'

const ProductCard = dynamic(
  () => import('app/(pages)/(components)/shopify/product/product-card'),
  { ssr: false },
)

export default async function ProductPage({ params }) {
  const product = await getProduct(params.handle)

  if (!product) return notFound()

  return (
    <Wrapper theme="dark" className={s.page}>
      <ProductMetaFetcher handle={params.handle} />

      <div className={s.productWrapper}>
        <Suspense fallback={<div>Loading Product...</div>}>
          <ProductLayout product={product} />
        </Suspense>
      </div>
      <Suspense fallback={<div>Loading Related Products...</div>}>
        <RelatedProducts id={product.id} />
      </Suspense>
    </Wrapper>
  )
}

async function RelatedProducts({ id }) {
  const relatedProducts = await getProductRecommendations(id)

  if (!relatedProducts.length) return null

  return (
    <div className={s.relatedProducts}>
      <h2>Related Products</h2>
      <ul className={`layout-grid ${s.grid}`}>
        {relatedProducts.map((product) => (
          <li key={product.handle} className={s.productItem}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  )
}
