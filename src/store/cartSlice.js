import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    cartItems: [],
    total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action,selectedSize) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.ID === newItem.ID
      );

      if (!existingItem) {
        state.cartItems.push({
            ...newItem,
          quantity: newItem.quantity + 1,
          selectedSize: selectedSize
        });
      } else {
        existingItem.quantity++;
        existingItem.ProductPrice =
          Number(existingItem.ProductPrice) + Number(newItem.ProductPrice);
      }

    
    },
    
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
