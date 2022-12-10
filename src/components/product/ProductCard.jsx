import React from "react";
import './Product.modules.scss'
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { toast } from "react-toastify";
import { RiHeartAddLine } from "react-icons/ri";
import { CartContext } from "../../context/CartContext";
import Col from "react-bootstrap/esm/Col";

const ProductCard = ( {item} ) => {
  const { categories, ID, productName,productPrice, url, sizeCheck } = item;
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
            <Col lg='3' md='6' xs='12' sm='6'>
    
              <div className=" text-left product-body relative">
                <div className="relative overflow-hidden product-body-top">
                  <img
                    src={url}
                    alt=""
                    className="lg:h-[300px] hover:scale-110 transition-all"
                  />
                  <div className="product-price w-auto absolute bottom-0 text-xs  text-left px-2 py-1 left-2 bg-white text-black font-light">
                    {productPrice}$
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
                      {productName}
                    </Link>
                    <div>{categories}</div>
                  </div>
                
                </div>
              <div className="flex mt-4 flex-col lg:flex-row md:flex-col">
                  <div className="flex gap-4 md:flex-wrap">
                    {sizeCheck.map((item, i) => {
                      return (
                        <div
                          key={i}
                          className={`border border-black px-4 h-[40px] cursor-pointer  transition ${selectedSize ===item ?  'bg-black text-white' : 'hover:bg-black hover:text-white'}`}
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
                <div className="btn  flex-shrink-0">
                    {selectedSize ? (
                        <button
                          className=" bg-black text-white w-[100px] h-[40px]
                            mb-4 font-light text-[12px] uppercase lg:mt-2 md:mt-4 mt-4
                            hover:bg-white hover:text-black transition-all hover:border hover:border-black
                            "
                          onClick={addProductToCart}
                        >
                          add to cart
                        </button>
                      ) : (
                        <button
                          className="bg-black text-white w-[100px] h-[40px]
                            mb-4 font-light text-[12px] uppercase lg:mt-2 md:mt-4 mt-4
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
  </Col>
      </>
  );
};

export default ProductCard;
