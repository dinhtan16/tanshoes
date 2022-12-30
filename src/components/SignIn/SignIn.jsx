import React from "react";
import {useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";


import {
  signInWithEmailPassword,
  signInWithGooglePopup,
  createUserDoc,
} from "../../utils/firebase/firebase";

import { Input } from "../single-dom/Input";
import ClubContent from "../single-dom/ClubContent/ClubContent";
import { Banner } from "../single-dom/footer-banner";

const SignIn = () => {
  const navigate = useNavigate();
  const formFieldInit = {
    email: "",
    password: "",
  };
  const [formField, setFormField] = useState(formFieldInit);
  const { email, password } = formField;
  //reset form
  const resetForm = () => {
    setFormField(formFieldInit);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormField({ ...formField, [name]: value });
  };

  const handleSubmitLogin = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signInWithEmailPassword(email, password);
      toast.success(`Welcome ${user?.email}`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        progress: undefined,
        theme: "light",
      });
      resetForm();
      navigate("/");
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        toast.error("wrong password", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          progress: undefined,
          theme: "light",
        });
      } else if (error.code === "auth/user-not-found") {
        toast.error("email not existed", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          progress: undefined,
          theme: "light",
        });
      }
      console.log(error.message);
    }
  };

  //loginwith popup
  const signInPopup = async () => {
    const { user } = await signInWithGooglePopup();
    // setCurrentUser(user);
    await createUserDoc(user);
    toast.success(`Welcome ${user?.email}`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      progress: undefined,
      theme: "light",
    });
    navigate("/");
  };
  return (
    <>
      <div className="mx-auto max-w-[1200px] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 sign-in">
        <div>
          <form onSubmit={handleSubmitLogin} className="mt-8 sign-in__form px-4">
            <h1 className="text-4xl font-extrabold text-left uppercase title__form">
              log in
            </h1>
            <div className="m-0 p-0 text-left underline">
              <Link to="#">Forgot your password?</Link>
            </div>

            <div className="relative mt-6">
              <input
                type="email"
                placeholder="Email"
                required
                onChange={handleInputChange}
                name="email"
                value={email}
                className="outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 focus:invalid:ring-pink-500
                        invalid:border-pink-500 invalid:text-pink-600 peer border
                        "
              />
              <div className="text-left absolute peer-placeholder-shown:invisible -top-5 peer-placeholder-shown:top-5 peer-placeholder-shown:left-4 text-gray-400 transition-all">
                <label htmlFor="Email">Email</label>
              </div>
              <p className="invisible  peer-valid:visible text-green-400 m-0 p-0 text-left absolute right-2 top-[35%] text-lg">
                <AiOutlineCheckCircle />
              </p>
            </div>
            <div className="relative mt-4">
              <Input
                type="password"
                placeholder="Password"
                required
                onChange={handleInputChange}
                name="password"
                value={password}
                className="peer outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
              />
              <div className="text-left absolute -top-5 peer-placeholder-shown:top-5 peer-placeholder-shown:left-4 text-gray-400 transition-all peer-placeholder-shown:invisible">
                <label htmlFor="Password">Password</label>
              </div>
            </div>
            <div className="text-left mt-4">
              <button
                className="bg-black px-2 py-2 w-64 lg:w-28 text-white uppercase flex items-center justify-center gap-2 font-bold hover:text-[#898989b5]"
                type="submit"
              >
                <span className="text-[14px]"> log in</span>

                <span className="text-lg">
                  <BsArrowRight />
                </span>
              </button>
              <div className="mt-4">
                <span className="text-[14px] font-light policy__form">
                  By clicking <span className="font-bold">“LOGIN”</span>, I
                  acknowledge that I have read, understood and accepted the
                  dtClub Terms and Conditions, the Website Terms and Conditions
                  and dnhtn Privacy Policy, and that I hereby consent to the
                  transfer, sharing, use, collection and disclosure of my
                  personal data to third parties as set out in the dnhtn Privacy
                  Policy.
                </span>
              </div>
            </div>
            <div className="text-left my-2">or</div>
            <div className="text-left mt-2">
              <button
                className="sign-in__btn__google bg-transparent border-black border px-2 py-2 w-48 text-black uppercase flex items-center justify-between gap-2 font-light hover:text-[#898989b5]"
                onClick={signInPopup}
                type="button"
              >
                <span className="text-[14px]">Google</span>
                <span className="text-lg">
                  <FcGoogle />
                </span>
              </button>
            </div>
            <div className="text-left mt-4 sign-up__navigate">
              <span className="text-[14px] font-normal">
                Doesn't have Account ? Let's{" "}
                <Link to="/signup" className="text-red-500 uppercase underline">
                  sign up
                </Link>
              </span>
            </div>
          </form>
        </div>
        <ClubContent />
      </div>
      <Banner />
    </>
  );
};

export default SignIn;
