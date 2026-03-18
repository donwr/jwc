// app/api/products/route.js
import { fetchProductsByFilter } from 'libs/shopify/getProducts'

export async function GET(req) {
  const { searchParams } = new URL(req.url)
  const filter = searchParams.get('filter') || 'all'

  try {
    const products = await fetchProductsByFilter(filter)

    // Check if the products array is empty
    if (products.length === 0) {
      return new Response(
        JSON.stringify({ error: 'No products found' }), // You might want to change this message
        {
          status: 404, // Change to a suitable status code
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
    }

    return new Response(JSON.stringify(products), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.error('Failed to fetch products:', error)
    return new Response(
      JSON.stringify({ error: 'Failed to fetch products from Shopify' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
  }
}
