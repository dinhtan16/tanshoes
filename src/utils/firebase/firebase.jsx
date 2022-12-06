// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signInWithRedirect,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import 'firebase/storage';
import {getStorage} from 'firebase/storage';
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWVs1wh1GTtobHh_Suyav0UfYMil9wSSU",
  authDomain: "clothing-db-408d2.firebaseapp.com",
  projectId: "clothing-db-408d2",
  storageBucket: "clothing-db-408d2.appspot.com",
  messagingSenderId: "703181525310",
  appId: "1:703181525310:web:82e9d44ad03e7467101c6f",
};
const app = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage(app);





export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithRedirectGoogle = () =>
  signInWithRedirect(auth, googleProvider);
// Initialize Firebase

export const createUserDoc = async (userAuth, additionalInformation = {}) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);
  // console.log(userDocRef)
  const userSnapshot = await getDoc(userDocRef);
  // console.log(userSnapshot)

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
        ...additionalInformation,
      });
    } catch (error) {
      return console.log("error", error.message);
    }
  }
  return userDocRef;
};
// export const createProductDocs = async (userAuth, additionalInformation = {}) => {
//   if (!userAuth) return;

//   const userDocRef = doc(db, "Products", userAuth.uid);
//   // console.log(userDocRef)
//   const userSnapshot = await getDoc(userDocRef);
//   // console.log(userSnapshot)

//   if (!userSnapshot.exists()) {
//     try {
//       await setDoc(userDocRef, {
//         ProductName: productName,
//         ProductPrice: Number(productPrice),
//         ProductImg: url
//       });
//     } catch (error) {
//       return console.log("error", error.message);
//     }
//   }
//   return userDocRef;
// };
//login state
// export const onAuthStateChangeListener = onAuthStateChanged(
//   auth,
//   (userAuth) => {
  
//     // const {  email } = userAuth;
//     if (userAuth?.uid) {
//       const uid = userAuth?.uid
//       // User is signed in, see docs for a list of available properties
//       // https://firebase.google.com/docs/reference/js/firebase.User
//       const fetchDb = async (uid) => {
//         const userDocRef = doc(db, "users", uid);
//         const fetch = await getDoc(userDocRef);

//         const res = fetch.data();

//         // console.log(userAuth?.email, res.displayName);
//       };
//       fetchDb(uid);

//       // ...
//     } else {
//       // User is signed out
//       // ...
//     }
//   }
// );

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInWithEmailPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};
export const signOutUser =async () => await signOut(auth) 
export const onAuthStateChangeListener =(callback) => onAuthStateChanged(auth,callback)