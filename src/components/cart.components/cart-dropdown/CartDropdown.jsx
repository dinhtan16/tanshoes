import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

import { FaTimes } from "react-icons/fa";

import CardItem from "../cart-item/CardItem";
const CartDropdown = () => {
  const navigate = useNavigate();
  const { isOpen, setIsOpen } = useContext(CartContext);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const { cartItems, total } = useContext(CartContext);
  const checkoutHandle = () => {
    navigate("/checkout");
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div
        className={`h-[350px] z-10 absolute top-16 right-2 overflow-hidden
                w-[350px] border  ring-1 bg-white dropdown-body`}
      >
        <div className="relative h-[100%] mt-2 overflow-x-hidden">
          <div className="flex justify-between items-center px-4">
            <div className="text-left uppercase text-[12px] tracking-wider  font-light underline leading-3 hover:text-red-500 transition-all">
              go to Shopping BAG
            </div>
            <button
              onClick={handleOpen}
              className="text-right uppercase text-[16px] tracking-wider font-light"
            >
              <FaTimes />
            </button>
          </div>
          {cartItems.length > 0 ? (
            <div className="item">
              {cartItems.map((item) => {
                return <CardItem item={item} key={item.ID} />;
              })}
            </div>
          ) : (
            <div className="text-center my-8">No item here ! let shopping</div>
          )}
          <div className="text-right mr-4 sticky bg-white bottom-0 left-0 mt-auto flex justify-between items-center px-2s">
            <div className="font-light pl-2">Total :{total}$ </div>
            <button
              className="bg-black px-4 py-2 rounded-md hover:text-gray-400 transition-all outline-none text-white my-8 font-light"
              onClick={checkoutHandle}
            >
              Check out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDropdown;
