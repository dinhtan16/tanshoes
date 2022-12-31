import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDocs, query, collection } from "firebase/firestore";
import { db } from "../../utils/firebase/firebase";

export const getProducts = createAsyncThunk("products/fetch", async () => {
  const q = query(collection(db, "Products"));
  const productsSnapshot = await getDocs(q);
  const productsArray = [];
  for (var snap of productsSnapshot.docs) {
    var data = snap.data();
    data.ID = snap.id;
    productsArray.push({
      ...data,
    });
    localStorage.setItem("Products", JSON.stringify(productsArray));
  }

  return productsArray;
});

const storageProducts = JSON.parse(localStorage.getItem("Products"));

const productSlice = createSlice({
  name: "productSlice",
  initialState: {
    products: storageProducts ?? [],
  },
  reducers: {},
  extraReducers: {
    //get to do
    [getProducts.pending]: (state, action) => {
      console.log("Fetching from backend ");
    },
    [getProducts.fulfilled]: (state, action) => {
      console.log("Done");
      state.products = action.payload;
    },
    [getProducts.rejected]: (state, action) => {
      console.log("error");
    },
  },
});

// Async action Creator,action and reducer dispatch
// export const getProducts =() => async dispatch => {
//   try{
//         const q = query(collection(db, "Products"));
//         const productsSnapshot = await getDocs(q);
//         const productsArray = [];
//         for (var snap of productsSnapshot.docs) {
//           var data = snap.data();
//           data.ID = snap.id;
//           productsArray.push({
//             ...data,
//           });
//           dispatch(setProducts(productsArray));
//         }
//     }
//     catch(error){
//         console.log(error)
//     }

// }

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;
