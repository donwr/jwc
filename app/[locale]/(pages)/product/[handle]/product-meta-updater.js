// components/ProductMetaUpdater.js
'use client'

import Head from 'next/head'
import React, { useEffect, useState } from 'react'

const defaultMeta = {
  title: 'Default Product Title',
  description: 'Default product description showcasing our amazing products.',
  openGraph: {
    images: [
      {
        url: 'https://your-domain.com/default-image.jpg',
        width: 800,
        height: 600,
        alt: 'Default Product Image',
      },
    ],
  },
}

export default function ProductMetaUpdater({ product }) {
  const [metaData, setMetaData] = useState(defaultMeta)

  useEffect(() => {
    if (!product) return

    // Extract and sanitize metadata fields
    const title = product.seo?.title || product.title || 'Fallback Title'
    const description =
      product.seo?.description || product.description || 'Fallback Description'
    const featuredImage =
      product.featuredImage || defaultMeta.openGraph.images[0]

    // Ensure all metadata fields are valid and log the values before setting state
    const imageUrl = featuredImage.url || defaultMeta.openGraph.images[0].url
    const imageWidth = featuredImage.width
      ? featuredImage.width.toString()
      : '800'
    const imageHeight = featuredImage.height
      ? featuredImage.height.toString()
      : '600'
    const imageAlt = featuredImage.altText || 'Product Image'

    // Update state with sanitized metadata
    setMetaData({
      title,
      description,
      openGraph: {
        images: [
          {
            url: imageUrl,
            width: imageWidth,
            height: imageHeight,
            alt: imageAlt,
          },
        ],
      },
    })
  }, [product])

  return (
    <Head>
      <title>{metaData.title}</title>
      <meta name="description" content={metaData.description} />
      {metaData.openGraph.images.map((image, index) => {
        return (
          <React.Fragment key={index}>
            <meta property="og:image" content={image.url} />
            <meta property="og:image:width" content={image.width} />
            <meta property="og:image:height" content={image.height} />
            <meta property="og:image:alt" content={image.alt} />
          </React.Fragment>
        )
      })}
    </Head>
  )
}
