import React from "react";
import { useContext } from "react";
import { useNavigate,Link } from "react-router-dom";
import { toast } from "react-toastify";

import {userContext} from '../../context/UserContext'
import { CartContext } from "../../context/CartContext";

import { BsArrowRight } from "react-icons/bs";
import {AiOutlinePlus} from 'react-icons/ai'

import paymentImg from '../../assets/payment.jpg'

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, deleteItemToCart, addItemToCart, total} = useContext(CartContext);
  const {currentUser} =useContext(userContext)

  const handleAuth = () => {
    toast.warning(`You must Login, directing you to Login Page`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      progress: undefined,
      theme: "light",
    });
    setTimeout(() =>{
      navigate('/account')
    } ,2000)
  }
  const handleCart = () => {
    toast.warning(`You must have at least 1 item to check out!`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      progress: undefined,
      theme: "light",
    });
  }
  return (
    <>
      <div className="max-w-[1200px] w-full mx-auto flex gap-8 md:flex-row lg:flex-row flex-col ">
        <div className="flex-shrink-0 lg:w-[70%] md:w-[60%] w-[100%]">
          <>
            <h1>YOUR BAG</h1>
            <div className="font-light mt-2">
              TOTAL :{" "}
              {cartItems.length > 1
                ? cartItems.length + " items"
                : cartItems.length + " item"}{" "}
              - <span className="font-bold text-lg">{total}$</span>
            </div>
            <p>
              Items in your bag are not reserved — check out now to make them
              yours.
            </p>
          </>
          <div>
            <div>
              {cartItems.length === 0 && (
                <div>
                  {" "}
                  No item is here, let{" "}
                  <span
                    className="text-lg font-bold underline pl-1 cursor-pointer hover:text-sky-400   "
                    onClick={() => navigate("/shop")}
                  >
                    Shopping
                  </span>
                </div>
              )}
              {cartItems.map((item) => {
             const {  ProductPrice, ProductName, ID, Ava } = item;
                
                return (
                  <div className="flex justify-between my-4 border border-black p-4" key={ID}>
                    <div className="flex gap-4">
                      <img
                        src={Ava}
                        alt="none"
                        className="w-[150px] h-[150px]"
                      />
                      <div className="flex flex-col justify-between">
                        <Link className="font-light text-xl hover:text-blue-200" to={`/shop/product/${ID}`}>{ProductName}</Link>
                        <span className="text-lg">Size :{item.selectedSize}</span>
                        <div className="flex gap-6 items-center">
                          <span
                            className="text-3xl bg-black text-white w-[40px] text-center cursor-pointer"
                            onClick={() => deleteItemToCart(item)}
                          >
                            -
                          </span>
                          <span className="text-xl">{item.quantity}</span>
                          <span
                            className="text-3xl bg-black text-white w-[40px] text-center cursor-pointer"
                            onClick={() => addItemToCart(item,item.selectedSize)}
                          >
                            +
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>{ProductPrice}$</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex-1 mt-8 flex flex-col gap-4">
        
          <div className="">
            <div className="border p-4 summary">
              <h1 className="uppercase font-extrabold">Order Summary</h1>
              <div className="flex justify-between">
                <div className="right flex flex-col gap-2">
                  <div className="font-light mt-2">
                    {cartItems.length > 1
                      ? cartItems.length + " items"
                      : cartItems.length + " item"}{" "}
                  </div>
                  <p className="p-0 m-0 font-light">DELIVERY</p>
                  <p className="font-bold p-0 m-0">TOTAL</p>
                  <p className="p-0 m-0 text-sm font-light">
                    (inclusive of tax 13$)
                  </p>
                </div>
                <div className="left flex flex-col gap-2">
                  <span className="font-bold text-lg">{total}$</span>
                  <div>
                    <p className="p-0 m-0">FREE</p>
                  </div>
                  <div>
                    <p className="font-bold p-0 m-0">{total + 13}$</p>
                  </div>
                </div>
              </div>
            </div>
              <div className="promo relative">
                <input type="text" placeholder="Enter Promo Code Here..." className="outline-none focus:ring-1"/>
               <div className="right-4 absolute top-6"> <AiOutlinePlus /></div>
              </div>
              <div className="payment mt-4 text-left">
                <p className="mb-4 font-light">ACCEPTED PAYMENT METHODS</p>
                <img src={paymentImg} alt="none" />
              </div>
          </div>
          <div className="w-full">
          {
            currentUser ? (
                cartItems.length > 0 ? (
                  <button onClick={() => navigate('/billing')} className="bg-black  flex items-center gap-2 justify-center text-white uppercase w-full h-[50px] font-bold">
                  check out{" "}
                  <span className="text-2xl">
                    <BsArrowRight />
                  </span>
                </button>
                ) : (
                  <button onClick={handleCart} className="bg-black  flex items-center gap-2 justify-center text-white uppercase w-full h-[50px] font-bold">
                  check out{" "}
                  <span className="text-2xl">
                    <BsArrowRight />
                  </span>
                </button>
                )
            ) : (
              
            cartItems.length > 0 ? (
              <button onClick={handleAuth} className="bg-black  flex items-center gap-2 justify-center text-white uppercase w-full h-[50px] font-bold">
              check out{" "}
              <span className="text-2xl">
                <BsArrowRight />
              </span>
            </button>
            ) : (
              <button onClick={handleCart} className="bg-black  flex items-center gap-2 justify-center text-white uppercase w-full h-[50px] font-bold">
              check out{" "}
              <span className="text-2xl">
                <BsArrowRight />
              </span>
            </button>
            )
            ) 

            
          }
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
