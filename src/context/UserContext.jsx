import React,{useState,createContext,useEffect} from 'react'

import {  createUserDoc, onAuthStateChangeListener } from '../utils/firebase/firebase'

export const userContext = createContext({
    currentUser :null,
    setCurrentUser:() => null,
})

const UserProvider = ({children}) => {


    const [currentUser, setCurrentUser] = useState(null)
    const value ={currentUser,setCurrentUser}

useEffect(() => {
    const unsub = onAuthStateChangeListener((user) => {
        if(user){
          createUserDoc(user) 
          // console.log(user.email)
          // localStorage.setItem('users',user)
        }
        return setCurrentUser(user)
    })
    return unsub
},[])

  return (
    <userContext.Provider value={value}>{children}</userContext.Provider>
  )
}

export default UserProvider