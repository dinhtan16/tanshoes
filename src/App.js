import React from 'react';
import {Routes,Route} from 'react-router-dom'
import "./App.css";
import Home from './routes/home/home.component'
import Shop from './components/shop/Shop';
import Navigate from './routes/navigation/Navigate';
import Account from '../src/routes/account/Account'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Signup from './components/SignUp/Signup';
import Footer from './routes/footer/Footer';
import Checkout from './routes/checkout/Checkout';
import  {AddProducts}  from './components/addproduct/Addproduct.jsx';
import DetailProduct from './components/detailproduct/DetailProduct';
import ScrollToTop from "react-scroll-to-top";
import Billing from './components/billing/Billing';
function App() {
  document.title='Tanshoes'
  return <div className="App">
    
    <>
    <ScrollToTop smooth color="#6f00ff" />
      <Routes>
        <Route path="/"   element={<Navigate/>}>
          <Route  index element={<Home />}/>
          <Route  path='shop' element={<Shop />}/>
          <Route  path='shop' element={<Shop />}/>
          <Route  path='shop/product/:id' element={<DetailProduct />}/>
          <Route  path='checkout' element={<Checkout />} />
          <Route  path='account' element={<Account />} />
          <Route  path='signup' element={<Signup />}/>
          <Route path='billing' element={<Billing/>} ></Route>
        </Route>
        <Route path='add' element={<AddProducts/>} ></Route>
      </Routes>

        <Footer />
      <ToastContainer />
    </>
    </div>;
}

export default App;
