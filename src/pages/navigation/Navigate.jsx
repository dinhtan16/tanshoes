import React, {  useState } from "react";
import "./navigate.scss";
import { useNavigate } from "react-router-dom";
import { NavLink, Outlet } from "react-router-dom";
import { signOutUser } from "../../utils/firebase/firebase";
import { toast } from "react-toastify";
import ReactTooltip from "react-tooltip";

import CartDropdown from "../../components/cart.components/cart-dropdown/CartDropdown";
import CartIcon from "../../components/cart.components/cart-icon/CartIcon";
import Search from "../../components/single-dom/search/Search";

import { AiOutlineUser } from "react-icons/ai";

import TextTransition, { presets } from "react-text-transition";

import { useSelector, useDispatch } from "react-redux";
import { setCartOpen } from "../../store/cart/cartsSlice";

const TEXTS = [
  "FREE SHIPPING FOR ADICLUB MEMBERS",
  "EASY RETURNS",
  "SHARE YOUR HOLIDAY SPIRIT",
];
const Navigate = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.user.currentUser);
  // const { setCartItems } = useContext(CartContext);
  // const { isOpen } = useContext(CartContext);
  const isOpen = useSelector((state) => state.cart.isOpen);

  const [navOpen, setNavOpen] = useState(false);

  function toggleNav() {
    setNavOpen((state) => !state);
  }
  const Links = [
    {
      id: 1,
      to: "shop",
      name: "Nam",
    },
    {
      id: 2,
      to: "/none",
      name: "Nữ",
    },
    {
      id: 3,
      to: "/none",
      name: "Trẻ em",
    },
    {
      id: 4,
      to: "none",
      name: "Mới & sắp ra mắt",
    },
    {
      id: 5,
      to: "/checkout",
      name: "Giỏ hàng",
    },

    
  ];
  const navigate = useNavigate();
  const signOutHandler = async () => {
    setNavOpen(false);
    await signOutUser();
    window.location.reload(true);
    localStorage.clear();
    dispatch(setCartOpen(false));
    navigate("/account");
    toast.success(`Sign Out success`, {
      position: "bottom-center",
      autoClose: 2000,
      closeOnClick: true,
      hideProgressBar: true,
      progress: undefined,
      theme: "light",
    });
  };

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>
      <div className="bg-black w-full  text-white justify-center flex items-center h-[40px] leading-[20px] py-2 font-light">
        <div className="cursor-pointer">
          <TextTransition springConfig={presets.molasses}>
            {TEXTS[index % TEXTS.length]}
          </TextTransition>
        </div>
      </div>
      <div className="top-header">
        <ul>
          <li>trợ giúp</li>
          <li>trình theo dõi đơn hàng</li>
          <li>đăng kí hội viên</li>
          <li>dnhtanclub</li>
          <li style={{display:'flex',alignItems:'center',gap:10}}>
            {currentUser ? (
              <>
                <NavLink
                  to="/user"
                  className="uppercase hover:text-red-500"
                  data-tip={currentUser?.email}
                  data-place="top"
                >
                  <ReactTooltip />

                  <span className="text-2xl">
                    {" "}
                    <AiOutlineUser />
                  </span>
                  {/* {localStorage.getItem('users')} */}
                </NavLink>
                <button
                  onClick={signOutHandler}
                  className=" hover:text-red-500"
                >
                  <span className="font-bold hover:underline">đăng xuất</span>
                </button>
              </>
            ) : (
              <NavLink
                to="/account"
                className=" hover:text-red-500 py-4"
                onClick={() => setNavOpen(false)}
              >
                <span className="font-bold hover:underline">đăng nhập</span>
              </NavLink>
            )}
          </li>
          <li>
            <img
              style={{ width: 20 }}
              alt="United States"
              src="https://adl-foundation.adidas.com/flags/1-2-1/vn.svg"
            />
          </li>
        </ul>
      </div>
      <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
        <div className="container-fluid">
          <NavLink
            className="navbar-brand font-extrabold text-2xl"
            to="/"
            onClick={() => setNavOpen(false)}
          >
            Adidos
          </NavLink>
          <div className="flex items-center gap-4 navbar-brand-toggle">
            <button
              onClick={toggleNav}
              className={
                navOpen ? "navbar-toggler" : "navbar-toggler collapsed"
              }
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div
            className={`${
              navOpen
                ? "collapse navbar-collapse show transition-all"
                : "collapse navbar-collapse transition-all"
            } flex justify-between gap-4 flex-wrap`}
            id="navbarNav"
          >
            <ul className="navbar-nav gap-8 lg:ml-8 flex lg:items-center flex-shrink-0 underline">
              {Links.map(({ to, id, name }) => (
                <NavLink
                  onClick={() => setNavOpen(false)}
                  to={to}
                  key={id}
                  className={(navData) =>
                    navData.isActive
                      ? "uppercase font-bold nav-item"
                      : "text-black hover:text-red-500 uppercase font-light nav-item  hover:font-bold transition-all"
                  }
                >
                  {name}
                </NavLink>
              ))}

              <div className="inline-flex items-center gap-4 signin-nav">
                {currentUser ? (
                  <>
                    <NavLink
                      to="/user"
                      className="uppercase hover:text-red-500"
                      data-tip={currentUser?.email}
                      data-place="bottom"
                    >
                      <ReactTooltip />

                      <span className="text-2xl">
                        {" "}
                        <AiOutlineUser />
                      </span>
                      {/* {localStorage.getItem('users')} */}
                    </NavLink>
                    <button
                      onClick={signOutHandler}
                      className="uppercase hover:text-red-500"
                    >
                      <span className="font-bold underline hover:text-sky-500 transition-all">
                        LOG OUT
                      </span>
                    </button>
                  </>
                ) : (
                  <NavLink
                    to="/account"
                    className="uppercase hover:text-red-500 py-4"
                    onClick={toggleNav}
                  >
                    <span className="font-bold underline hover:text-sky-500 transition-all py-4">
                      SIGN IN
                    </span>
                  </NavLink>
                )}
              </div>
            </ul>
            <div className=" flex items-center gap-2">
              <Search nav={navOpen} setnav={setNavOpen} />

              <button className="cart-icon">
                <CartIcon />
              </button>
            </div>
          </div>
          {isOpen && <CartDropdown />}
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigate;
