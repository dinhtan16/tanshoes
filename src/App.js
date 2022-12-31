import { useEffect } from "react";
import React from "react";

import { useDispatch } from "react-redux";

import { setCurrentUser } from "./store/users/userSlice";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ScrollToTop from "react-scroll-to-top";
import {
  createUserDoc,
  onAuthStateChangeListener,
} from "./utils/firebase/firebase";
import Layout from "./components/Layout/Layout";

const App = () => {
  document.title = "Tanshoes";

  const dispatch = useDispatch();
  useEffect(() => {
    const unsub = onAuthStateChangeListener((user) => {
      if (user) {
        createUserDoc(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsub;
  }, []);
  return (
    <div className="App">
      <ScrollToTop smooth color="#6f00ff" />
      <Layout />
      <ToastContainer />
    </div>
  );
};

export default App;
