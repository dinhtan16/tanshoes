import React, { createContext, useState } from "react";
import { useReducer } from "react";
import { useEffect } from "react";

export const CartContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  deleteItemToCart: () => {},
  total: 0,
  setCartItems: () => {},
});

const addItemCart = (cartItems, itemToAdd, selectedSize) => {
  const existedItem = cartItems.find((item) => item.ID === itemToAdd.ID);

  if (existedItem) {
    return cartItems.map((item) =>
      item.ID === itemToAdd.ID
        ? { ...item, quantity: item.quantity + 1, selectedSize: selectedSize }
        : item
    );
  }

  return [
    ...cartItems,
    { ...itemToAdd, quantity: 1, selectedSize: selectedSize },
  ];
};
const deleteItem = (cartItems, itemDelete) => {
  const existedItem = cartItems.find((item) => item.ID === itemDelete.ID);
  if (existedItem.quantity === 1) {
    return cartItems.filter((item) => item.ID !== itemDelete.ID);
  }

  return cartItems.map((item) =>
    item.ID === itemDelete.ID ? { ...item, quantity: item.quantity - 1 } : item
  );
};
const storeCart = JSON.parse(localStorage.getItem("Cart"));
const storeTotalCart = localStorage.getItem("total");

const INIT_STATE = {
  cartItems: storeCart ?? [],
  isOpen: false,
  total: storeTotalCart,
};
const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_CART_ITEMS":
      return {
        ...state,
        ...payload, //(cartItems,total)
      };
    default:
      throw new Error(`error ${type}`);
  }
};
const CartProvider = ({ children }) => {
  // const [cartItems, setCartItems] = useState(storeCart ?? []);
  // const [total, setTotal] = useState(storeTotalCart);
  // const [isOpen, setIsOpen] = useState(false);

  const [{ cartItems, isOpen, total }, dispatch] = useReducer(
    cartReducer,
    INIT_STATE
  );
  const updateCartItemsReducer = (newCartItems) => {
    const newTotalCart = newCartItems.reduce(
      (total, cartItem) =>
        total + Number(cartItem.productPrice) * cartItem.quantity,
      0
    );
    localStorage.setItem("total", newTotalCart);

    dispatch({
      type: "SET_CART_ITEMS",
      payload: { cartItems: newCartItems, total: newTotalCart },
    });
  };

  const addItemToCart = (itemToAdd, selectedSize) => {
    const newCartItems = addItemCart(cartItems, itemToAdd, selectedSize);
    updateCartItemsReducer(newCartItems);
  };
  const deleteItemToCart = (itemDelete) => {
    const newCartItems = deleteItem(cartItems, itemDelete);
    updateCartItemsReducer(newCartItems);
  };

  // useEffect(() => {
  //   const totalCart = cartItems.reduce(
  //     (total, cartItem) =>
  //       total + Number(cartItem.productPrice) * cartItem.quantity,
  //     0
  //   );

  //   setTotal(totalCart);
  // }, [cartItems]);
  const value = {
    isOpen,
    setIsOpen: () => {},
    cartItems,
    addItemToCart,
    deleteItemToCart,
    total,
  };

  localStorage.setItem("Cart", JSON.stringify(cartItems));
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
