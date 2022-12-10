import React, { createContext, useState } from "react";
import { useEffect } from "react";

export const CartContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  deleteItemToCart: () => {},
  total: 0,
  setCartItems:() =>{}
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

const CartProvider = ({ children }) => {
  const storeCart = JSON.parse(localStorage.getItem("Cart"))
  const storeTotalCart = localStorage.getItem("total")


  const [cartItems, setCartItems] = useState(storeCart ?? []);
  const [total, setTotal] = useState(storeTotalCart);
  const [isOpen, setIsOpen] = useState(false);
  const addItemToCart = (itemToAdd, selectedSize) => {
    setCartItems(addItemCart(cartItems, itemToAdd, selectedSize));
  };
  const deleteItemToCart = (itemDelete) => {
    setCartItems(deleteItem(cartItems, itemDelete));
  };

  useEffect(() => {
    const totalCart = cartItems.reduce(
      (total, cartItem) => total + Number(cartItem.productPrice) * cartItem.quantity,
      0
    );
    localStorage.setItem("total",totalCart)

    setTotal(totalCart);
  }, [cartItems]);
  const value = {
    isOpen,
    setIsOpen,
    cartItems,
    addItemToCart,
    deleteItemToCart,
    total,
    setCartItems
  };
  //total

  localStorage.setItem("Cart",JSON.stringify(cartItems ))
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
