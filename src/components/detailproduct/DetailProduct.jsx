import React from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import "./productcate.scss";
import { toast } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";

import { TbTruckDelivery, TbExchange } from "react-icons/tb";
import { BsArrowRight } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { addItem, setCartOpen } from "../../store/cart/cartsSlice";

const DetailProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState(null);

  const products = useSelector((state) => state.product.products);
   JSON.parse(localStorage.getItem("products"));
  const product = products?.find((item) => item.ID === id);
  const {
    productPrice,
    sizeCheck,
    productName,
    url,
    productcolor,
    categories,
  } = product;
  const handleBuy = () => {
    dispatch(addItem({ ...product, selectedSize: selectedSize }));
    setSelectedSize(null)

    toast.info(`Loading`, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
      progress: undefined,
      theme: "light",
    });
    setTimeout(() => {
      navigate("/checkout");
    }, 2000);
    dispatch(setCartOpen(false));
  };
  const handleAddCart = () => {
    dispatch(addItem({ ...product, selectedSize: selectedSize }));
    setSelectedSize(null)

    toast.success(`Thêm vào giỏ hàng thành công`, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
      progress: undefined,
      theme: "light",
    });
  
    dispatch(setCartOpen(false));
  };
  return (
    <>
      <div className="flex mx-auto px-4 mt-8 gap-4 md:flex-col flex-col lg:flex-row md:justify-center justify-center md:items-center items-center lg:items-start">
        <div className="product-img w-full lg:w-[65%]">
          <div className="mb-4 flex justify-center items-center">
            <img src={url} alt="none" />
          </div>
        </div>
        <div className="product-info flex-1 w-full">
          <div className="categories">{categories}</div>
          <div className="product-name_detail">{productName}</div>
          <div className="product-price">{productPrice}$</div>
          <div className="product-color">{productcolor}</div>
          <div className="product-size ">
            <span>Size</span>
            <div className="flex gap-2">
              {sizeCheck.map((item, i) => (
                <button
                  key={i}
                  className={`border border-black px-4 h-[40px] cursor-pointer  transition ${
                    selectedSize === item
                      ? "bg-black text-white"
                      : "hover:bg-black hover:text-white"
                  }`}
                  onClick={() => {
                    setSelectedSize(item);
                    toast.success(`Selected`, {
                      position: "top-center",
                      autoClose: 300,
                      hideProgressBar: true,
                      progress: undefined,
                      theme: "light",
                    });
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="size-guide_link">Size guide</div>
          </div>
          <div className="btn-add flex md:max-w-[500px] max-w-[400px] lg:w-full">
            {selectedSize ? (
              <button
                className="bg-black text-white h-[50px] w-[70%] uppercase flex justify-center items-center gap-4 
                transition-all tracking-normal font-bold px-5 py-3 cursor-pointer hover:bg-white hover:text-black hover:border border-black"
                onClick={handleAddCart
                }
              >
                <span className="text-[15px]"> add to bag </span>
                <span className="text-[20px]">
                  <BsArrowRight />
                </span>
              </button>
            ) : (
              <button
                className="bg-black text-white h-[50px] w-[70%] uppercase  transition-all flex justify-center items-center gap-4 
             tracking-normal font-bold px-5 py-3 cursor-pointer hover:bg-white hover:text-black hover:border border-black"
                onClick={() =>
                  toast.warning(`Vui lòng chọn size trước!`, {
                    position: "top-center",
                    autoClose: 300,
                    hideProgressBar: true,
                    progress: undefined,
                    theme: "light",
                  })
                }
              >
                <span className="text-[15px]"> add to bag </span>
                <span className="text-[20px]">
                  <BsArrowRight />
                </span>
              </button>
            )}
            <span>
              <button className="border border-black h-[50px] flex-1 px-4  ml-2 hover:text-red-500 ring-1 hover:border-transparent hover:ring-red-400 ">
                <FaRegHeart />
              </button>
            </span>
          </div>
          <div className="btn-later">
            <button
              onClick={handleBuy}
              className="md:max-w-[500px] max-w-[500px] lg:w-full border mt-2 border-black h-[50px] w-full uppercase hover:ring-1 hover:border-transparent
            tracking-normal font-bold px-5 py-3"
            >
              BUY NOW
            </button>
          </div>
          <div className="futher-info mt-8 ">
            <div className="flex items-center mt-4 gap-2 hover:text-white hover:bg-black cursor-pointer">
              <TbTruckDelivery />
              <span className="text-[14px] underline ">
                Order before 19th December to receive your products by 24th
                December!
              </span>
            </div>
            <div className="mt-4 flex items-center gap-2 hover:text-white hover:bg-black cursor-pointer">
              <TbExchange />
              <span className="text-[14px] underline hover:text-white hover:bg-black">
                Not the right size or colour? Visit our returns page for
                details.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailProduct;
