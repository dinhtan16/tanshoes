import React,{useState,useEffect} from "react";
// import { useContext } from "react";
import { useNavigate,Link } from "react-router-dom";
import { toast } from "react-toastify";

// import { CartContext } from "../../context/CartContext";

import { BsArrowRight } from "react-icons/bs";
import {AiOutlinePlus} from 'react-icons/ai'

import paymentImg from '../../assets/payment.jpg'
import Loading from "../../components/loading/Loading";
import { useSelector,useDispatch } from "react-redux";
import { addItem,deleteItem } from "../../store/cart/cartsSlice";

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  // const { cartItems, deleteItemToCart, addItemToCart, total} = useContext(CartContext);
  // const {currentUser} =useContext(userContext)
  const cartItems = useSelector(state => state.cart.cartItems)
  const total = useSelector(state => state.cart.totalAmount)

  const currentUser = useSelector(state => state.user.currentUser)
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    let loadingTime = setTimeout(() => {
      setLoading(false);
    }, 900);
    return () => {
      clearTimeout(loadingTime)
    }
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
   loading ? <Loading /> : (
    <>
    <div className="max-w-[1200px] w-full mx-auto flex gap-8 md:flex-row lg:flex-row flex-col ">
      <div className="flex-shrink-0 lg:w-[70%] md:w-[60%] w-[100%] mt-8 px-2">
      
          <span className="text-2xl font-bold">GI??? H??NG C???A T??I</span>
          <div className="font-bold mt-2">
            T???ng : {total}$
          </div>
          <p>
            C??c s???n ph???m hi???n ch??a ???????c x??c nh???n, vui l??ng thanh to??n ????? s??? h???u ngay.
          </p>
    
        <div>
          <div>
            {cartItems.length === 0 && (
              <div>
                {" "}
                oops, ch??a c?? s???n ph???m n??o c???, c??ng{" "}
                <span
                  className="text-lg font-bold underline pl-1 cursor-pointer hover:text-sky-400   "
                  onClick={() => navigate("/shop")}
                >
                  Shopping n??o
                </span>
              </div>
            )}
            {cartItems.map((item) => {
           const {  productPrice, productName, ID, url } = item;
              
              return (
                <div className="flex justify-between my-4 border border-black p-4" key={ID}>
                  <div className="flex gap-4">
                    <img
                      src={url}
                      alt="none"
                      className="w-[150px] h-[150px]"
                    />
                    <div className="flex flex-col justify-between">
                      <Link className="font-light text-xl hover:text-blue-200" to={`/shop/product/${ID}`}>{productName}</Link>
                      <span className="text-lg">Size :{item.selectedSize}</span>
                      <div className="flex gap-6 items-center">
                        <span
                          className="text-3xl bg-black text-white w-[40px] text-center cursor-pointer"
                          onClick={() => dispatch(deleteItem(item))}
                        >
                          -
                        </span>
                        <span className="text-xl">{item.quantity}</span>
                        <span
                          className="text-3xl bg-black text-white w-[40px] text-center cursor-pointer"
                          onClick={() => dispatch(addItem({...item}))}
                        >
                          +
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>{productPrice}$</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex-1 mt-8 flex flex-col gap-4 px-2">
      
        <div className="">
          <div className="border p-4 summary">
            <h1 className="uppercase font-extrabold">T??m t???t ????n h??ng</h1>
            <div className="flex justify-between">
              <div className="right flex flex-col gap-2">
                <div className="font-light mt-2">
                {cartItems.length } s???n ph???m
                </div>
                <p className="p-0 m-0 font-light">Ph?? giao h??ng</p>
                <p className="font-bold p-0 m-0">T???ng ti???n</p>
                <p className="p-0 m-0 text-sm font-light">
                  (Bao g???m 13$ tax)
                </p>
              </div>
              <div className="left flex flex-col gap-2">
                <span className="font-bold text-lg">{total}$</span>
                <div>
                  <p className="p-0 m-0">Mi???n ph??</p>
                </div>
                <div>
                  <p className="font-bold p-0 m-0">{Number(total) + 13}$</p>
                </div>
              </div>
            </div>
          </div>
            <div className="promo relative">
              <input type="text" placeholder="Nh???p m?? gi???m gi?? t???i ????y..." className="outline-none focus:ring-1"/>
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
                Thanh to??n{" "}
                <span className="text-2xl">
                  <BsArrowRight />
                </span>
              </button>
              ) : (
                <button onClick={handleCart} className="bg-black  flex items-center gap-2 justify-center text-white uppercase w-full h-[50px] font-bold">
                Thanh to??n{" "}
                <span className="text-2xl">
                  <BsArrowRight />
                </span>
              </button>
              )
          ) : (
            
          cartItems.length > 0 ? (
            <button onClick={handleAuth} className="bg-black  flex items-center gap-2 justify-center text-white uppercase w-full h-[50px] font-bold">
            Thanh to??n{" "}
            <span className="text-2xl">
              <BsArrowRight />
            </span>
          </button>
          ) : (
            <button onClick={handleCart} className="bg-black  flex items-center gap-2 justify-center text-white uppercase w-full h-[50px] font-bold">
            Thanh to??n{" "}
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
   )
  );
};

export default Checkout;
