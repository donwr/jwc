import productFragment from '../fragments/product'

export const getProductQuery = /* GraphQL */ `
  query getProductByHandle($handle: String!) {
    productByHandle(handle: $handle) {
      ...product
    }
  }
  ${productFragment}
`

export const getProductsQuery = /* GraphQL */ `
  query getProducts(
    $sortKey: ProductSortKeys
    $reverse: Boolean
    $query: String
  ) {
    products(sortKey: $sortKey, reverse: $reverse, query: $query, first: 100) {
      edges {
        node {
          ...product
        }
      }
    }
  }
  ${productFragment}
`

// libs/shopify/queries/product.js
export const getAllProductsQuery = /* GraphQL */ `
  query getAllProducts {
    products(first: 100) {
      edges {
        node {
          ...product
        }
      }
    }
  }

  fragment product on Product {
    id
    handle
    title
    description
    descriptionHtml
    options {
      id
      name
      values
    }
    priceRange {
      maxVariantPrice {
        amount
        currencyCode
      }
      minVariantPrice {
        amount
        currencyCode
      }
    }
    variants(first: 250) {
      edges {
        node {
          id
          title
          availableForSale
          selectedOptions {
            name
            value
          }
        }
      }
    }
    featuredImage {
      ...image
    }
    images(first: 20) {
      edges {
        node {
          ...image
        }
      }
    }
    seo {
      ...seo
    }
    tags
    updatedAt
  }

  fragment image on Image {
    url
    altText
    width
    height
  }

  fragment seo on SEO {
    description
    title
  }
`

export const getProductRecommendationsQuery = /* GraphQL */ `
  query getProductRecommendations($productId: ID!) {
    productRecommendations(productId: $productId) {
      ...product
    }
  }
  ${productFragment}
`
