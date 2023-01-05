import React from "react";
import "./Product.modules.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";

import { toast } from "react-toastify";
import { RiHeartAddLine } from "react-icons/ri";

import Col from "react-bootstrap/esm/Col";
import { addItem } from "../../store/cart/cartsSlice";

import { ProductBody,ProductBodyBottom,ProductBodyTop,ProductSizeMap } from "./product.styledComponent";

const ProductCard = ({ item }) => {
  const { categories, ID, productName, productPrice, url, sizeCheck } = item;
  // const { addItemToCart } = useContext(CartContext);
  const [selectedSize, setSelectedSize] = useState(null);
  // const [cartItem, setCartItem] = useState(null);

  // const cartItem = useSelector(state => state.cart.cartItems)
  const dispatch = useDispatch()
  const addProductToCart = () => {

    toast.success(`Đã thêm vào giỏ hàng!`, {
      position: "bottom-center",
      autoClose: 300,
      hideProgressBar: true,
      progress: undefined,
      theme: "light",
    });
    // addItemToCart(item, cartItem)
    // console.log(selectedSize)
    dispatch(addItem({...item,selectedSize:selectedSize}))
    setSelectedSize(null)
  };
  const handleSizeAlert = () => {
    toast.warning(`Vui lòng chọn size trước !`, {
      position: "top-center",
      autoClose: 300,
      hideProgressBar: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <>
      <Col lg="3" md="6" xs="12" sm="6">
        <ProductBody>
          <ProductBodyTop>
            <img
              src={url}
              alt=""
              className="lg:h-[300px] hover:scale-110 transition-all img-card"
            />
            <div className="product-price w-auto absolute top-0  text-left px-2 py-1 left-2 bg-white text-black font-light">
              {productPrice}$
            </div>
            <div className="heart-icon bg-white top-0 absolute right-2 w-[30px] h-[30px] flex items-center justify-center cursor-pointer hover:text-red-500">
              <RiHeartAddLine />
            </div>
            <div className="product-name">
              <Link
                to={`product/${ID}`}
                className="hover:font-bold hover:text-sky-400 transition-all text-[14px] mt-4  font-light product-name lg:w-auto w-[250px]"
              >
                {productName}
              </Link>
              <div>{categories}</div>
            </div>
            <div className="product-size">
              <ProductSizeMap>
                {sizeCheck.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={`border my-2 w-[60px] flex justify-center border-black px-4 h-[40px] cursor-pointer  transition ${
                        selectedSize === item
                          ? "bg-black text-white"
                          : "hover:bg-black hover:text-white"
                      }`}
                    >
                      <button
                            onClick={() => {
                              setSelectedSize(item);
                              // setCartItem(item)
                            }}
                          >
                            {item}
                          </button>
                    </div>
                  );
                })}
              </ProductSizeMap>
            </div>
          </ProductBodyTop>
          <ProductBodyBottom>
            <div>
              {selectedSize ? (
                <button
                  className=" bg-black text-white w-[100px] h-[40px]
                            mb-4  text-[12px] uppercase lg:mt-2 md:mt-4 mt-4 font-normal
                            hover:bg-white hover:text-black transition-all hover:border hover:border-black
                            "
                  onClick={addProductToCart}
                >
                  add to cart
                </button>
              ) : (
                <button
                  className="bg-black text-white w-[100px] h-[40px]
                            mb-4 font-normal text-[12px] uppercase lg:mt-2 md:mt-4 mt-4
                            hover:bg-white hover:text-black transition-all hover:border hover:border-black
                            "
                  onClick={handleSizeAlert}
                >
                  add to cart
                </button>
              )}
            </div>
          </ProductBodyBottom>
        </ProductBody>
      </Col>
    </>
  );
};

export default ProductCard;
