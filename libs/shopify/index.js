import {
  HIDDEN_PRODUCT_TAG,
  SHOPIFY_GRAPHQL_API_ENDPOINT,
  TAGS,
} from 'libs/shopify/constants'
import { revalidateTag } from 'next/cache'
import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import {
  addToCartMutation,
  createCartMutation,
  editCartItemsMutation,
  removeFromCartMutation,
} from './mutations/cart'
import {
  createCustomerMutation,
  deleteCustomerMutation,
  updateCustomerMutation,
} from './mutations/customer'

import { getCartQuery } from './queries/cart'
import {
  getCollectionProductsQuery,
  getCollectionQuery,
  getCollectionsQuery,
} from './queries/collection'
import { getMenuQuery } from './queries/menu'
import { getPageQuery, getPagesQuery } from './queries/page'
import {
  getAllProductsQuery,
  getProductQuery,
  getProductRecommendationsQuery,
  getProductsQuery,
} from './queries/product'

const endpoint = process.env.SHOPIFY_STORE_DOMAIN + SHOPIFY_GRAPHQL_API_ENDPOINT
const key = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN
export async function shopifyFetch({
  cache = 'force-cache',
  revalidate = 60,
  headers,
  query,
  tags,
  variables,
}) {
  try {
    const result = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': key,
        ...headers,
      },
      body: JSON.stringify({
        ...(query && { query }),
        ...(variables && { variables }),
      }),
      cache,
      ...(tags && { next: { tags, revalidate } }),
    })

    const body = await result.json()

    if (body.errors) {
      throw body.errors[0]
    }

    if (!body.data) {
      throw new Error('No data returned from Shopify')
    }

    return {
      status: result.status,
      body,
    }
  } catch (e) {
    console.error('Shopify Fetch Error:', e)
    return {
      status: 500,
      error: e.message || 'An error occurred while fetching data from Shopify.',
      body: null,
    }
  }
}

const removeEdgesAndNodes = (array) => {
  return array.edges.map((edge) => edge?.node)
}

const reshapeCart = (cart) => {
  if (!cart.cost?.totalTaxAmount) {
    cart.cost.totalTaxAmount = {
      amount: '0.0',
      currencyCode: 'USD',
    }
  }

  return {
    ...cart,
    lines: removeEdgesAndNodes(cart.lines),
  }
}

const reshapeCollection = (collection) => {
  if (!collection) {
    return undefined
  }

  return {
    ...collection,
    path: `/search/${collection.handle}`,
  }
}

const reshapeCollections = (collections) => {
  const reshapedCollections = []

  for (const collection of collections) {
    if (collection) {
      const reshapedCollection = reshapeCollection(collection)

      if (reshapedCollection) {
        reshapedCollections.push(reshapedCollection)
      }
    }
  }

  return reshapedCollections
}

const reshapeImages = (images, productTitle) => {
  const flattened = removeEdgesAndNodes(images)

  return flattened.map((image) => {
    const filename = image.url.match(/.*\/(.*)\..*/)[1]
    return {
      ...image,
      altText: image.altText || `${productTitle} - ${filename}`,
    }
  })
}

const reshapeProduct = (product, filterHiddenProducts) => {
  if (
    !product ||
    (filterHiddenProducts && product.tags.includes(HIDDEN_PRODUCT_TAG))
  ) {
    return undefined
  }

  const { images, variants, ...rest } = product

  return {
    ...rest,
    images: reshapeImages(images, product.title),
    variants: removeEdgesAndNodes(variants),
  }
}

const reshapeProducts = (products) => {
  const reshapedProducts = []

  for (const product of products) {
    if (product) {
      const reshapedProduct = reshapeProduct(product)

      if (reshapedProduct) {
        reshapedProducts.push(reshapedProduct)
      }
    }
  }
  revalidateTag(TAGS.cart) // Trigger revalidation for cart data

  return reshapedProducts
}

export async function createCart() {
  const res = await shopifyFetch({
    query: createCartMutation,
    cache: 'force-cache',
    tags: [TAGS.cart], // Ensure cart data is tagged for revalidation
  })

  return reshapeCart(res.body.data.cartCreate.cart)
}

export async function addToCart(cartId, lines = []) {
  const res = await shopifyFetch({
    query: addToCartMutation,
    variables: {
      cartId,
      lines,
    },
    cache: 'force-cache',
  })

  return reshapeCart(res.body.data.cartLinesAdd.cart)
}

export async function removeFromCart(cartId, lineIds = []) {
  const res = await shopifyFetch({
    query: removeFromCartMutation,
    variables: {
      cartId,
      lineIds,
    },
    cache: 'force-cache',
  })

  return reshapeCart(res.body.data.cartLinesRemove.cart)
}

export async function updateCart(cartId, lines = []) {
  const res = await shopifyFetch({
    query: editCartItemsMutation,
    variables: {
      cartId,
      lines,
    },
    cache: 'force-cache',
  })

  return reshapeCart(res.body.data.cartLinesUpdate.cart)
}

export async function getCart(cartId) {
  const res = await shopifyFetch({
    query: getCartQuery,
    variables: { cartId },
    tags: [TAGS.cart],
    cache: 'force-cache',
  })

  // Old carts becomes `null` when you checkout.
  if (!res.body.data.cart) {
    return undefined
  }

  return reshapeCart(res.body.data.cart)
}

// Function to create a new customer
export async function createCustomer(input) {
  const res = await shopifyFetch({
    query: createCustomerMutation,
    variables: { input },
    cache: 'force-cache', // Customer creation should not be cached
  })

  return res.body.data.customerCreate
}

// Function to update an existing customer
export async function updateCustomer(customerAccessToken, customer) {
  const res = await shopifyFetch({
    query: updateCustomerMutation,
    variables: {
      customerAccessToken,
      customer,
    },
    cache: 'force-cache', // Updates should not be cached
  })

  return res.body.data.customerUpdate
}

// Function to delete a customer (assuming you have set up a way to handle customer deletion)
export async function deleteCustomer(customerId) {
  const res = await shopifyFetch({
    query: deleteCustomerMutation,
    variables: { customerId },
    cache: 'force-cache', // Deletion should not be cached
  })

  return res.body.data.customerDelete
}

export async function verifyCustomer({ email, password }) {
  const query = `
    mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
      customerAccessTokenCreate(input: $input) {
        customerAccessToken {
          accessToken
          expiresAt
        }
        userErrors {
          field
          message
        }
      }
    }
  `

  const variables = {
    input: {
      email,
      password,
    },
  }

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': key,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    })

    const body = await res.json()

    if (body.errors) {
      throw new Error(body.errors[0].message)
    }

    return body.data.customerAccessTokenCreate.customerAccessToken
  } catch (e) {
    console.error('Fetch error:', e) // Add logging here
    throw e
  }
}

export async function getCollection(handle) {
  const res = await shopifyFetch({
    query: getCollectionQuery,
    tags: [TAGS.collections],
    variables: {
      handle,
    },
  })

  return reshapeCollection(res.body.data.collection)
}

export async function getCollectionProducts({ collection, reverse, sortKey }) {
  const res = await shopifyFetch({
    query: getCollectionProductsQuery,
    tags: [TAGS.collections, TAGS.products],
    cache: 'force-cache',
    variables: {
      handle: collection,
      reverse,
      sortKey: sortKey === 'CREATED_AT' ? 'CREATED' : sortKey,
    },
  })

  if (!res.body.data.collection) {
    console.log(`No collection found for \`${collection}\``)
    return []
  }

  return reshapeProducts(removeEdgesAndNodes(res.body.data.collection.products))
}

export async function getCollections() {
  const res = await shopifyFetch({
    query: getCollectionsQuery,
    tags: [TAGS.collections],
  })

  // Check if an error occurred
  if (res.status !== 200 || res.body === null) {
    console.warn('Failed to fetch collections, using fallback.')
    // Return a fallback value for collections if there's an error
    return [
      {
        handle: '',
        title: 'All',
        description: 'All products',
        seo: {
          title: 'All',
          description: 'All products',
        },
        path: '/search',
        updatedAt: new Date().toISOString(),
      },
    ]
  }

  const shopifyCollections = removeEdgesAndNodes(res.body?.data?.collections)
  const collections = [
    {
      handle: '',
      title: 'All',
      description: 'All products',
      seo: {
        title: 'All',
        description: 'All products',
      },
      path: '/search',
      updatedAt: new Date().toISOString(),
    },
    ...reshapeCollections(shopifyCollections).filter(
      (collection) => !collection.handle.startsWith('hidden'),
    ),
  ]

  return collections
}

export async function getMenu(handle) {
  const res = await shopifyFetch({
    query: getMenuQuery,
    tags: [TAGS.collections],
    variables: {
      handle,
    },
  })

  return (
    res.body?.data?.menu?.items.map((item) => ({
      title: item.title,
      path: item.url
        .replace(domain, '')
        .replace('/collections', '/search')
        .replace('/pages', ''),
    })) || []
  )
}

export async function getPage(handle) {
  const res = await shopifyFetch({
    query: getPageQuery,
    variables: { handle },
  })

  return res.body.data.pageByHandle
}

export async function getPages() {
  const res = await shopifyFetch({
    query: getPagesQuery,
  })

  return removeEdgesAndNodes(res.body.data.pages)
}

export async function getProductRecommendations(productId) {
  const res = await shopifyFetch({
    query: getProductRecommendationsQuery,
    tags: [TAGS.products],
    variables: {
      productId,
    },
  })

  return reshapeProducts(res.body.data.productRecommendations)
}
export async function getProduct(handle) {
  // Fetch the product details using the handle directly
  const res = await shopifyFetch({
    query: getProductQuery,
    variables: { handle },
  })

  const product = res.body?.data?.productByHandle

  // If no product is found, return null
  if (!product) {
    console.log('Product not found for handle:', handle)
    return null
  }

  return reshapeProduct(product, false)
}

export async function getProducts({ query, reverse, sortKey }) {
  const res = await shopifyFetch({
    query: getProductsQuery,
    tags: [TAGS.products],
    variables: {
      query,
      reverse,
      sortKey,
    },
  })
  return reshapeProducts(removeEdgesAndNodes(res.body.data.products))
}
export async function getAllProducts() {
  const res = await shopifyFetch({
    query: getAllProductsQuery,
    tags: [TAGS.products],
    cache: 'force-cache',
  })
  const allProducts = reshapeProducts(
    removeEdgesAndNodes(res.body.data.products),
  )
  return allProducts
}

// This is called from `app/api/revalidate.ts` so providers can control revalidation logic.
export async function revalidate(req) {
  // We always need to respond with a 200 status code to Shopify,
  // otherwise it will continue to retry the request.
  const collectionWebhooks = [
    'collections/create',
    'collections/delete',
    'collections/update',
  ]
  const productWebhooks = [
    'products/create',
    'products/delete',
    'products/update',
  ]
  const topic = headers().get('x-shopify-topic') || 'unknown'
  const secret = req.nextUrl.searchParams.get('secret')
  const isCollectionUpdate = collectionWebhooks.includes(topic)
  const isProductUpdate = productWebhooks.includes(topic)

  if (!secret || secret !== process.env.SHOPIFY_REVALIDATION_SECRET) {
    console.error('Invalid revalidation secret.')
    return NextResponse.json({ status: 200 })
  }

  if (!isCollectionUpdate && !isProductUpdate) {
    // We don't need to revalidate anything for any other topics.
    return NextResponse.json({ status: 200 })
  }

  if (isCollectionUpdate) {
    revalidateTag(TAGS.collections)
  }

  if (isProductUpdate) {
    revalidateTag(TAGS.products)
  }

  return NextResponse.json({ status: 200, revalidated: true, now: Date.now() })
}
