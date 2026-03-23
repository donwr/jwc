// 'use client'
// import CollectionItems from 'app/(pages)/(components)/shopify/collection/collection-row-items'
// import ProductCardSkeleton from 'app/(pages)/(components)/skeletons/product-card-skeleton'
// import s from './shop.module.scss'

// function StoreUnavailable() {
//   return (
//     <section className={s.storeUnavailable}>
//       <h2 className={s.unavailableHeader}>STORE COMING SOON</h2>

//       <div className={`layout-grid ${s.previewGrid}`}>
//         <ProductCardSkeleton className={s.first} />
//         <ProductCardSkeleton className={s.second} />
//         <ProductCardSkeleton className={s.third} />
//         <ProductCardSkeleton className={s.fourth} />
//       </div>
//     </section>
//   )
// }

// export default function ShoppingGallery({
//   initialProducts,
//   // initialFilter,
//   // filterOptions,
// }) {
//   // const [selectedFilter, setSelectedFilter] = useState(initialFilter)
//   // const [products, setProducts] = useState(initialProducts)
//   // const [storeConnected, setStoreConnected] = useState(true)
//   // useEffect(() => {
//   //   const fetchFilteredProducts = async () => {
//   //     try {
//   //       const response = await fetch(`/api/products?filter=${selectedFilter}`)

//   //       if (!response.ok) {
//   //         // If the response status is not OK, assume the store is disconnected
//   //         if (response.status === 404) {
//   //           // Handle the case for no products found
//   //           throw new Error('No products found')
//   //         }
//   //         throw new Error('Failed to connect to Shopify')
//   //       }

//   //       const data = await response.json()
//   //       setProducts(data)
//   //       setStoreConnected(true) // Mark the store as connected if the fetch is successful
//   //     } catch (error) {
//   //       console.error('Error fetching products:', error)
//   //       setStoreConnected(false) // Mark the store as disconnected if there's an error
//   //     }
//   //   }

//   //   fetchFilteredProducts()
//   // }, [])
//   // const handleFilterChange = (newFilter) => {
//   //   setSelectedFilter(newFilter)
//   // }

//   // Conditionally render StoreUnavailable if store is not connected
//   if (!storeConnected) {
//     return <StoreUnavailable />
//   }

//   return (
//     <section className={s.shop}>
//       <h2 className={s.header}>SHOP</h2>
//       <p className={s.description}>
//         Check out my curated collection of gear that keeps the Rismo spirit
//         alive. From the apparel I rock to the equipment I swear by - these picks
//         are all about keeping you motivated and ready to crush your goals.
//       </p>

//       {/* Filters */}
//       {/* <Filters options={filterOptions} onFilterChange={handleFilterChange} /> */}

//       {/* Display products based on the selected filter */}
//       <CollectionItems
//         category={products}
//         title={`Products: ${selectedFilter}`}
//       />
//     </section>
//   )
// }

// // export function Filters({ options, onFilterChange }) {
// //   const [selected, setSelected] = useState('all')

// //   const handleChange = (filter) => {
// //     setSelected(filter)
// //     onFilterChange(filter)
// //   }

// //   return (
// //     <div className={s.filters}>
// //       {options.map((option) => {
// //         const normalizedOption = option.toLowerCase() // Normalize the option to lowercase
// //         return (
// //           <button
// //             key={normalizedOption}
// //             className={cn(s.filterButton, {
// //               [s.active]: selected === normalizedOption,
// //             })}
// //             onClick={() => handleChange(normalizedOption)}
// //           >
// //             {option}
// //           </button>
// //         )
// //       })}
// //     </div>
// //   )
// // }
