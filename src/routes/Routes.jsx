import React from 'react'
import Home from '../pages/home/home'
import Shop from '../components/shop/Shop'
import DetailProduct from '../components/detailproduct/DetailProduct'
import Checkout from '../pages/checkout/Checkout'
import Account from '../pages/account/Account'
import Signup from '../components/SignUp/Signup'
import Billing from '../components/billing/Billing'
import { AddProducts } from '../components/addproduct/Addproduct'
import { Route,Routes } from 'react-router-dom'
const RoutesApp = () => {
  return (
    <Routes>
  
      <Route  index element={<Home />}/>
      <Route  path='shop' element={<Shop />}/>
      <Route  path='shop/product/:id' element={<DetailProduct />}/>
      <Route  path='checkout' element={<Checkout />} />
      <Route  path='account' element={<Account />} />
      <Route  path='signup' element={<Signup />}/>
      <Route path='billing' element={<Billing/>} ></Route>
  
      <Route path='add' element={<AddProducts/>} ></Route>
  </Routes>
  )
}

export default RoutesApp