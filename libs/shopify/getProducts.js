import { getAllProducts, getCollectionProducts } from './index'

export async function fetchProductsByFilter(filter) {
  try {
    let products = []

    if (filter === 'all') {
      const allProducts = await getAllProducts()

      if (allProducts && allProducts.length > 0) {
        products = [...allProducts]
      } else {
        console.warn('No products found for filter "all".')
        return [] // Explicitly return an empty array if no products found
      }
    } else {
      const collectionProducts = await getCollectionProducts({
        collection: filter.toLowerCase(),
      })

      if (collectionProducts && collectionProducts.length > 0) {
        products = [...collectionProducts]
      } else {
        console.warn(`No products found for filter "${filter}".`)
        return [] // Explicitly return an empty array if no collection products found
      }
    }

    return products // Return the fetched products array if successful
  } catch (error) {
    console.error('Error fetching products:', error)
    return [] // Return empty products array in case of any error
  }
}
