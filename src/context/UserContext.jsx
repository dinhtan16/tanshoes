// import React, {  createContext, useEffect, useReducer } from "react";

// import {
//   createUserDoc,
//   onAuthStateChangeListener,
// } from "../utils/firebase/firebase";

// export const userContext = createContext({
//   currentUser: null,
//   setCurrentUser: () => null,
// });

// export const USER_ACTION_TYPE = {
//   SET_CURRENT_USER: "SET_CURRENT_USER",
// };

// const userReducer = (state, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case USER_ACTION_TYPE.SET_CURRENT_USER:
//       return {
//         ...state,
//         currentUser: payload,
//       };

//     default:
//       throw new Error('')
//   }
// };
// const INIT_STATE = {
//   currentUser:null
// }
// const UserProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(userReducer,INIT_STATE);
//   const {currentUser} =state
//   const setCurrentUser =  (user) => {
//     dispatch({type:USER_ACTION_TYPE.SET_CURRENT_USER,payload:user})
//   }

//   const value = { currentUser, setCurrentUser };

//   useEffect(() => {
//     const unsub = onAuthStateChangeListener((user) => {
//       if (user) {
//         createUserDoc(user);
//         // console.log(user.email)
//         // localStorage.setItem('users',user)
//       }
//       return setCurrentUser(user);
//     });
//     return unsub;
//   }, []);

//   return <userContext.Provider value={value}>{children}</userContext.Provider>;
// };

// export default UserProvider;