// import React, { createContext, useState } from "react";
// import { useEffect } from "react";

// import { getDocs, query, collection } from "firebase/firestore";
// import { db } from "../utils/firebase/firebase";

// export const ProductsContext = createContext({
//   products: [],
//   setProducts:() => {},
// });

// const ProductsProvider = ({ children }) => {
//   useEffect(() => {
//     const fetchProduct = async () => {
//       const q = query(collection(db, "Products"));
//       const productsSnapshot = await getDocs(q);
//       const productsArray = [];
//       for (var snap of productsSnapshot.docs) {
//         var data = snap.data();
//         data.ID = snap.id;
//         productsArray.push({
//           ...data,
//         });
//         setProducts(productsArray);
//       }
//     };
//     fetchProduct();
//   }, []);
//   const storageProducts = JSON.parse(localStorage.getItem("Products"))
//   const [products, setProducts] = useState(storageProducts ?? []);
//   localStorage.setItem("Products",JSON.stringify(products))
//   const value = { products, setProducts };
//   return (
//     <ProductsContext.Provider value={value}>
//       {children}
//     </ProductsContext.Provider>
//   );
// };

// export default ProductsProvider;
