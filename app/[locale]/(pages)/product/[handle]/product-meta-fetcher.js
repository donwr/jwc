// components/ProductMetaFetcher.js
import { getProduct } from 'libs/shopify'
import ProductMetaUpdater from './product-meta-updater'

export default async function ProductMetaFetcher({ handle }) {
  // Fetch the product data on the server
  const product = await getProduct(handle)

  // If no product is found, return null (or handle the error accordingly)
  if (!product) return null

  // Pass the product data to the client-side component
  return <ProductMetaUpdater product={product} />
}
