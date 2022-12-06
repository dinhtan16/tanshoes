import React, { useContext, useEffect, useState, useRef } from "react";
import "./navigate.scss";
import { useNavigate } from "react-router-dom";
import { NavLink, Outlet } from "react-router-dom";
import { userContext } from "../../context/UserContext";
import { signOutUser } from "../../utils/firebase/firebase";
import { toast } from "react-toastify";
import ReactTooltip from "react-tooltip";

import CartDropdown from "../../components/cart.components/cart-dropdown/CartDropdown";
import CartIcon from "../../components/cart.components/cart-icon/CartIcon";
import { CartContext } from "../../context/CartContext";
import Search from "../../components/single-dom/search/Search";

import { FaBars } from "react-icons/fa";
import { AiOutlineUser, AiOutlineLogout } from "react-icons/ai";
import { BiLogInCircle } from "react-icons/bi";
import { CgAdidas } from "react-icons/cg";

import TextTransition, { presets } from "react-text-transition";

const Links = [
  {
    id: 1,
    to: "shop",
    name: "Men",
  },
  {
    id: 2,
    to: "releasedate",
    name: "release date",
  },
  {
    id: 3,
    to: "/cart",
    name: "cart",
  },
  {
    id: 4,
    to: "/sport",
    name: "sport",
  },
  {
    id: 5,
    to: "/kids",
    name: "KIDS",
  },
  {
    id: 6,
    to: "/women",
    name: "Women",
  },
  // {
  //   id: 4,
  //   to: "/account",
  //   name: "Account",
  // },
];

const TEXTS = [
  "FREE SHIPPING FOR ADICLUB MEMBERS",
  "EASY RETURNS",
  "SHARE YOUR HOLIDAY SPIRIT",
];
const Navigate = () => {
  const { currentUser } = useContext(userContext);
  const { setCartItems } = useContext(CartContext);
  const { isOpen } = useContext(CartContext);

  const barRef = useRef(null);
  const navMobile = useRef(null);


  const navigate = useNavigate();
  const signOutHandler = async () => {
    await signOutUser();
    //  setCurrentUser(null)
    localStorage.clear();
    setCartItems([]);
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
  const [stickyClass, setStickyClass] = useState("relative");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 80
        ? setStickyClass(
            "fixed top-0 left-0 z-50  right-0 w-full px-4 bg-white"
          )
        : setStickyClass("relative");
    }
  };

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  //handleNav
  const showNavbar = () => {
    navMobile.current.classList.toggle('active')
  }
  const closeNav = () => {
    navMobile.current.classList.remove('active')
  }
  
  return (
    <>
      {
        <div ref={navMobile} className='nav-mobile'>
           <div className="relative nav-link__mobile h-full flex flex-col gap-8 items-center font-extrabold justify-center mx-auto">
        <Search />
        {Links.map(({ to, id, name }) => (
          <NavLink
            onClick={closeNav}
            to={to}
            key={id}
            className={(navData) =>
              navData.isActive
                ? "text-red-500 uppercase"
                : "text-black hover:text-red-500 uppercase"
            }
          >
            {name}
          </NavLink>
        ))}
        <div
          
          className="underline font-light active:bg-sky-200 mt-2"
          onClick={closeNav}
        >
          Close
        </div>
      </div>
        </div>
      }
      <div className="bg-black w-full  text-white justify-center flex items-center h-30px py-2 font-light">
        <div className="cursor-pointer">
          <TextTransition springConfig={presets.molasses}>
            {TEXTS[index % TEXTS.length]}
          </TextTransition>
        </div>
      </div>
      <div className={` px-4 w-full mx-auto  ${stickyClass}`}>
        <div className="navbar">
          <div className="logo">
            <NavLink to="/">
              <span className="text-3xl">
                <CgAdidas />
              </span>
            </NavLink>
          </div>
          <div className="nav-link">
            {Links.map(({ to, id, name }) => (
              <NavLink
                to={to}
                key={id}
                className={(navData) =>
                  navData.isActive
                    ? "text-red-500 uppercase"
                    : "text-black hover:text-red-500 uppercase"
                }
              >
                {name}
              </NavLink>
            ))}
          </div>
          <div className="actions">
            <div className="search">
              {" "}
              <Search />
            </div>

            {currentUser ? (
              <>
                <NavLink
                  to="/user"
                  className="uppercase hover:text-red-500"
                  data-tip="Your account"
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
                  data-tip="Log out"
                  data-place="bottom"
                >
                  <ReactTooltip />
                  <span className="text-2xl">
                    {" "}
                    <AiOutlineLogout />
                  </span>
                </button>
              </>
            ) : (
              <NavLink
                to="/account"
                className="uppercase hover:text-red-500"
                data-tip="Sign In"
                data-place="bottom"
              >
                <ReactTooltip />
                <span className="text-2xl">
                  <BiLogInCircle />
                </span>
              </NavLink>
            )}

            <button>
              <CartIcon />
            </button>
            <div className="nav-toggle" ref={barRef} onClick={showNavbar}>
              {" "}
              <span className="text-3xl">
                {" "}
                <FaBars />
              </span>
            </div>
          </div>
        </div>
        {isOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigate;
