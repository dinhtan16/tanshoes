import React from "react";
import { useState,useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { userContext } from "../../context/UserContext";

import { toast } from "react-toastify";

import {
  createAuthUserWithEmailAndPassword,
  createUserDoc,
} from "../../utils/firebase/firebase";

import { FcGoogle } from "react-icons/fc";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";

import { Input } from "../single-dom/Input";
import ClubContent from "../single-dom/ClubContent/ClubContent";




const Signup = () => {
  const navigate = useNavigate();
  const { setCurrentUser } = useContext(userContext);
  const formFieldInit = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formField, setFormField] = useState(formFieldInit);
  //reset form
  const resetForm = () => {
    setFormField(formFieldInit);
  };

  const { displayName, email, password, confirmPassword } = formField;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormField({ ...formField, [name]: value });
  };

  //handle submit form
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      toast.error("wrong password confirm", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      setCurrentUser(user);
      createUserDoc(user, { displayName });
      toast.success("Sign up success", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      resetForm();
      navigate("/");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast.error("email already in use", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      console.log(error);
    }
  };

  return (
    <>
      <div className="mx-auto max-w-[1200px] grid lg:grid-cols-2 grid-cols-1 sign-up">
        <form onSubmit={handleSubmit} className="mt-8 sign-up__form">
          <h1 className="text-3xl text-left uppercase font-extrabold">
            register
          </h1>
          <div className="text-left my-4 font-light sign-up__btn__google">
            Sign up with
          </div>
          <div className="text-left mt-2">
            <button
              className="bg-transparent border-black border px-2 py-2 w-48 text-black uppercase flex items-center justify-between gap-2 font-light hover:text-[#898989b5]"
              type="button"
            >
              <span className="text-[14px]">Google</span>
              <span className="text-lg">
                <FcGoogle />
              </span>
            </button>
          </div>
          <div className="text-left font-light mt-4">
            Have account ?{" "}
            <span>
              <Link to="/account" className="underline font-normal uppercase">
                Log in now!
              </Link>
            </span>
          </div>
          <div className="mt-8">
            <div>
              <div className="text-left mb-6 font-bold">LOGIN DETAILS</div>

              <div className="relative">
                <Input
                  type="text"
                  placeholder="Name"
                  required
                  onChange={handleInputChange}
                  name="displayName"
                  value={displayName}
                  className="peer outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                />
                <div className="text-left absolute -top-5 peer-placeholder-shown:invisible peer-placeholder-shown:top-5 select-none peer-placeholder-shown:left-4 text-gray-400 transition-all">
                  <label htmlFor="Password">Name</label>
                </div>
              </div>
              <div className="relative mt-4">
                <Input
                  type="email"
                  placeholder="you@example.com"
                  required
                  onChange={handleInputChange}
                  name="email"
                  value={email}
                  className="outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 focus:invalid:ring-pink-500
                        invalid:border-pink-500 invalid:text-pink-600 peer
                        "
                />
                <div className="text-left absolute -top-5 peer-placeholder-shown:invisible peer-placeholder-shown:top-5 peer-placeholder-shown:left-4 text-gray-400 transition-all">
                  <label htmlFor="Email">Email</label>
                </div>
                <p className="invisible  peer-valid:visible text-green-400 m-0 p-0 text-left absolute right-2 top-[35%] text-lg">
                  <AiOutlineCheckCircle />
                </p>
              </div>
            </div>
            <div className="relative mt-4">
              <div>
                <Input
                  type="password"
                  placeholder="Password"
                  required
                  onChange={handleInputChange}
                  name="password"
                  value={password}
                  className="peer outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                />
                <div className="font-light text-[13px] text-left">
                  Password must at least 6 characters!
                </div>
                <div className="text-left absolute -top-5 peer-placeholder-shown:invisible peer-placeholder-shown:top-5 select-none peer-placeholder-shown:left-4 text-gray-400 transition-all">
                  <label htmlFor="password">Password</label>
                </div>
              </div>
            </div>
            <div className="relative mt-6">
              <div>
                <Input
                  type="password"
                  placeholder="Confirm Password"
                  required
                  onChange={handleInputChange}
                  name="confirmPassword"
                  value={confirmPassword}
                  className="peer outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                />
                <div className="text-left absolute -top-5 peer-placeholder-shown:invisible peer-placeholder-shown:top-5 select-none peer-placeholder-shown:left-4 text-gray-400 transition-all">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2 flex flex-col checkbox__form">
            <span className="flex items-center justify-start gap-4 text-[15px] font-light py-2 ">
              <input
              required
                type="checkbox"
                name="ckbox"
                className="w-[24px] h-[24px] shrink-0"
              />
              Yes, I am over 16 years old
            </span>
            <span className="flex items-center justify-start gap-4 text-[15px] font-light py-2 text-left">
              <input
              required
                type="checkbox"
                name="ckbox"
                className="w-[24px] h-[24px] shrink-0"
              />
              I have read, understood and accepted the adidas Privacy Policy,
              the adiClub Terms and Conditions and Website Terms and Conditions.
            </span>
            <span className="flex items-center justify-start gap-4 text-[15px] font-light py-2 text-left">
              <input
                type="checkbox"
                name="ckbox"
                className="w-[24px] h-[24px] shrink-0"
              />
              I hereby consent to the use of my personal data for marketing and
              promotional purposes as set out in the adidas Privacy Policy.
            </span>
            <span className="flex items-center justify-start gap-4 text-[15px] font-light py-2 text-left">
              <input
                type="checkbox"
                name="ckbox"
                className="w-[24px] h-[24px] shrink-0"
              />
              I hereby consent to the transfer, sharing, use, collection and
              disclosure of my personal data to third parties as set out in the
              adidas Privacy Policy.
            </span>
          </div>
          <div className="text-left mt-2">
            <button
              className="bg-black px-2 py-2 w-64 lg:w-28 text-white uppercase flex items-center justify-center gap-2 font-bold hover:text-[#898989b5]"
              type="submit"
            >
              <span className="text-[14px] btn-signup"> sign up</span>

              <span className="text-lg">
                <BsArrowRight />
              </span>
            </button>
          </div>
        </form>
        <div>
          <ClubContent />
        </div>
      </div>
    </>
  );
};

export default Signup;
