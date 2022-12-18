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
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const TEXTS = [
  "FREE SHIPPING FOR ADICLUB MEMBERS",
  "EASY RETURNS",
  "SHARE YOUR HOLIDAY SPIRIT",
];
const Navigate = () => {
  const { currentUser } = useContext(userContext);
  const { setCartItems } = useContext(CartContext);
  const { isOpen } = useContext(CartContext);

  const [toggle, setToggle] = useState(false);

  // const barRef = useRef(null);
  // const navMobile = useRef(null);
  const [navOpen, setNavOpen] = useState(false);

  function toggleNav() {
    setNavOpen((state) => !state);
  }
  const Links = [
    {
      id: 1,
      to: "shop",
      name: "Men",
    },
    {
      id: 2,
      to: "none",
      name: "release date",
    },
    {
      id: 3,
      to: "/checkout",
      name: "cart",
    },

    {
      id: 4,
      to: "/none",
      name: "Womens",
    },
    {
      id: 5,
      to: "/none",
      name: "Kids",
    },
  ];
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
  // const [stickyClass, setStickyClass] = useState("relative");

  // useEffect(() => {
  //   window.addEventListener("scroll", stickNavbar);

  //   return () => {
  //     window.removeEventListener("scroll", stickNavbar);
  //   };
  // }, []);

  // const stickNavbar = () => {
  //   if (window !== undefined) {
  //     let windowHeight = window.scrollY;
  //     windowHeight > 80
  //       ? setStickyClass(
  //           "fixed top-0 left-0 z-50  right-0 w-full px-4 bg-white"
  //         )
  //       : setStickyClass("relative");
  //   }
  // };

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  //handleNav
  // const showNavbar = () => {
  //   navMobile.current.classList.toggle('active')
  // }
  // const closeNav = () => {
  //   navMobile.current.classList.remove('active')
  // }

  return (
    <>
      <div className="bg-black w-full  text-white justify-center flex items-center h-[40px] leading-[20px] py-2 font-light">
        <div className="cursor-pointer">
          <TextTransition springConfig={presets.molasses}>
            {TEXTS[index % TEXTS.length]}
          </TextTransition>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand font-extrabold text-2xl" to="/">
            Adidos
          </NavLink>
      <div className="flex items-center gap-4">
      <button className="cart-icon lg:hidden">
                <CartIcon />
              </button>
            <button
              onClick={toggleNav}
              className={navOpen ? "navbar-toggler" : "navbar-toggler collapsed"}
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
            className={
              navOpen
                ? "collapse navbar-collapse show transition-all flex justify-between"
                : "collapse navbar-collapse transition-all flex justify-between"
            }
            id="navbarNav"
          >
            <ul className="navbar-nav gap-8 lg:ml-8">
              {Links.map(({ to, id, name }) => (
                <NavLink
                  onClick={toggleNav}
                  to={to}
                  key={id}
                  className={(navData) =>
                    navData.isActive
                      ? "uppercase font-bold nav-item"
                      : "text-black hover:text-red-500 uppercase font-light nav-item"
                  }
                >
                  {name}
                </NavLink>
              ))}
            </ul>
            <Form className="flex items-center gap-4 lg:gap-4 flex-wrap flex-shrink-1 actions">
              <div className="flex items-center gap-2 flex-wrap">
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
                  >
                    <span className="font-bold underline hover:text-sky-500 transition-all">
                      LOG OUT
                    </span>
                  </button>
                </>
              ) : (
                <NavLink to="/account" className="uppercase hover:text-red-500">
                  <span className="font-bold underline hover:text-sky-500 transition-all">
                    SIGN IN
                  </span>
                </NavLink>
              )}

            </Form>
              
          </div>
            {isOpen && <CartDropdown />}
       
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigate;
