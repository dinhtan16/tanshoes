import React from 'react'
import Footer from '../footer/Footer'
import Navigate from '../../pages/navigation/Navigate'
import Routes from '../../routes/Routes'

const Layout = () => {
  return (
   <>
        <Navigate/>
        <Routes />
        <Footer/>
   </>
  )
}

export default Layout