import { createSlice } from "@reduxjs/toolkit";

const storeCart = JSON.parse(localStorage.getItem("Cart"));
const storeTotalCart = localStorage.getItem("total");
const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cartItems: storeCart ?? [],
    totalAmount: storeTotalCart ?? 0,
    isOpen: false,
  },
  reducers: {
    addItem: (state, action) => {
      // const {selectedSize,o} = action.payload
      // console.log(selectedSize)
      const selectedSize = action.payload.selectedSize;
      const newItem = action.payload;

      const existItem = state.cartItems.find((item) => item.ID === newItem.ID);

      if (existItem) {
        existItem.quantity++;
      } else {
        state.cartItems.push({
          ...newItem,
          quantity: 1,
          selectedSize: selectedSize,
        });
      }

      state.totalAmount = state.cartItems.reduce((total, item) => {
        return total + item.productPrice * item.quantity;
      }, 0);
      localStorage.setItem("Cart", JSON.stringify(state.cartItems));
      localStorage.setItem("total", JSON.stringify(state.totalAmount));
    },
    deleteItem: (state, action) => {
      const itemDelete = action.payload;
      const existItem = state.cartItems.find(
        (item) => item.ID === itemDelete.ID
      );

      if (existItem.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.ID !== existItem.ID
        );
      } else {
        existItem.quantity = existItem.quantity - 1;
        state.totalAmount = state.cartItems.reduce((total, item) => {
          return total + item.productPrice * item.quantity;
        }, 0);
      }
      state.totalAmount = state.cartItems.reduce((total, item) => {
        return total + item.productPrice * item.quantity;
      }, 0);
      localStorage.setItem("total", JSON.stringify(state.totalAmount));
      localStorage.setItem("Cart", JSON.stringify(state.cartItems));
    },

    setCartOpen: (state, action) => {
      return {
        ...state,
        isOpen: action.payload,
      };
    },
  },
});

export const { addItem, setCartOpen, deleteItem } = cartSlice.actions;

export default cartSlice.reducer;
