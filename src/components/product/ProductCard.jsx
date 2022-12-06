import React from "react";
import './Product.modules.scss'
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { toast } from "react-toastify";
import { RiHeartAddLine } from "react-icons/ri";
import { CartContext } from "../../context/CartContext";
const ProductCard = ( {item} ) => {
  const { Categories, ProductPrice, ProductName, ID, Ava, ProductSize } = item;
  const { addItemToCart } = useContext(CartContext);
  const [selectedSize, setSelectedSize] = useState(null);
  const addProductToCart = () => addItemToCart(item, selectedSize);
  const handleSizeAlert = () => {
    toast.warning(`Please select size first !`, {
      position: "top-center",
      autoClose: 300,
      hideProgressBar: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <>
      <div className="mx-auto text-left product-body relative h-[500px]  md:w-[200px] lg:w-full w-full">
        <div className="relative overflow-hidden product-body-top">
          <img
            src={Ava}
            alt=""
            className="h-[300px] hover:scale-110 transition-all"
          />
          <div className="product-price w-auto absolute bottom-0 text-xs  text-left px-2 py-1 left-2 bg-white text-black font-light">
            {ProductPrice}$
          </div>
          <div className="absolute top-2 bg-white right-2 w-[30px] h-[30px] flex items-center justify-center cursor-pointer hover:text-red-500">
            <RiHeartAddLine />
          </div>
        </div>
        <div className="flex justify-between  md:flex-col lg:flex-row product-body-bottom mt-2 gap-2">
          <div className="flex-1">
            <Link
              to={`product/${ID}`}
              className="hover:font-bold hover:text-sky-400 transition-all text-[14px] mt-4  font-light product-name lg:w-auto w-[250px]"
            >
              {ProductName}
            </Link>
            <div>{Categories}</div>
          </div>
        
        </div>
      <div className="flex items-center">
          <div className="flex gap-4 md:flex-wrap mt-4">
            {ProductSize.map((item, i) => {
              return (
                <div
                  key={i}
                  className={`border border-black p-1 cursor-pointer  transition ${selectedSize ===item ?  'bg-black text-white' : 'hover:bg-black hover:text-white'}`}
                >
                 {
                  selectedSize ? (
                    <button
                    onClick={() => {
                      setSelectedSize('');
                    }}
                  >
                    {item}
                  </button>
                  ) : (
                    <button
                    onClick={() => {
                      setSelectedSize(item);
                    }}
                  >
                    {item}
                  </button>
                  )
                 }
                </div>
              );
            })}
          </div>
        <div className="btn  flex-shrink-0 absolute bottom-0">
            {selectedSize ? (
                <button
                  className="bg-black text-white w-[100px] h-[40px]
                    mb-4 font-light text-[12px] uppercase lg:mt-2 md:mt-4 mt-2
                    hover:bg-white hover:text-black transition-all hover:border hover:border-black
                    "
                  onClick={addProductToCart}
                >
                  add to cart
                </button>
              ) : (
                <button
                  className="bg-black text-white w-[100px] h-[40px]
                    mb-4 font-light text-[12px] uppercase lg:mt-2 md:mt-4 mt-2
                    hover:bg-white hover:text-black transition-all hover:border hover:border-black
                    "
                  onClick={handleSizeAlert}
                >
                  add to cart
                </button>
              )}
        </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
