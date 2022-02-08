// import React, { createContext, useState, useEffect } from 'react'
// import { productsData } from '../libs/products'

// export const ProductsContext = createContext()

// const ProductContextProvider = ({ children }) => {
//   const [products, setProducts] = useState([])
//   useEffect(() => {
//     productsData().then((res) => setProducts(res))
//   }, [])
//   return (
//     <ProductsContext.Provider value={{ products }}>
//       {children}
//     </ProductsContext.Provider>
//   )
// }

// export default ProductContextProvider
