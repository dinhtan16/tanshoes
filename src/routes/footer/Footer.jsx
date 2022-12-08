import React from "react";
import { Link } from "react-router-dom";
import footer from "../../assets/footer.jpg";
import './footer.scss'
const Footer = () => {
  return (
    <>
      <div className="footer  w-full mx-auto border-t-2 mt-8">
        <div className="mx-auto max-w-[1200px] grid lg:grid-cols-6 gap-6 mt-4 grid-cols-2">
          <div className="m-4">
            <h1>Products</h1>
            <div className="flex flex-col gap-2 font-light mt-2 nav-footer">
              <Link to="/">Shoes</Link>
              <Link to="/">Clothing</Link>
              <Link to="/">New Arrival</Link>
              <Link to="/">Outlet</Link>
            </div>
          </div>
          <div className="m-4 h-[200px]">
            <h1>SPORTS</h1>
            <div className="flex flex-col gap-2 font-light mt-2 nav-footer">
              <Link to="/">Shoes</Link>
              <Link to="/">Clothing</Link>
              <Link to="/">New Arrival</Link>
              <Link to="/">Outlet</Link>
            </div>
          </div>
          <div className="m-4 h-[200px]">
            <h1>COLLECTIONS</h1>
            <div className="flex flex-col gap-2 font-light mt-2 nav-footer">
              <Link to="/">Shoes</Link>
              <Link to="/">Clothing</Link>
              <Link to="/">New Arrival</Link>
              <Link to="/">Outlet</Link>
            </div>
          </div>
          <div className="m-4">
            <h1 className="shrink-0">COMPANY INFO</h1>
            <div className="flex flex-col gap-2 font-light mt-2 nav-footer">
              <Link to="/">Shoes</Link>
              <Link to="/">Clothing</Link>
              <Link to="/">New Arrival</Link>
              <Link to="/">Outlet</Link>
              <Link to="/">New Arrival</Link>
              <Link to="/">Outlet</Link>
            </div>
          </div>
          <div className="m-4 h-[200px]">
            <h1>SUPPORT</h1>
            <div className="flex flex-col gap-2 font-light mt-2 nav-footer">
              <Link to="/">Shoes</Link>
              <Link to="/">Clothing</Link>
              <Link to="/">New Arrival</Link>
              <Link to="/">Outlet</Link>
              <img src={footer} alt="none" className="max-w-[150px]"/>
            </div>
          </div>
          <div className="m-4 h-[200px]">
            <h1>FOLLOW US</h1>
            <div className="flex flex-col gap-2 font-light mt-2 nav-footer">
              <Link to="/">Facebook</Link>
              <Link to="/">Twitter</Link>
              <Link to="/">Shoppe</Link>
              <Link to="/">Outlet</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-shrink-0
      bg-gray-900 text-white py-4 font-light mt-8 text-center">
        <span><a href="https://www.adidas.com.vn/en/privacy_policy" className=" pr-6 text-white font-light text-[12px]"> Privacy and policy</a></span>
       <span> <Link to ='/' className=" pr-6 text-white font-light text-[12px]">Terms and Conditions</Link></span>
        <span><Link to ='/' className=" pr-6 text-white font-light text-[12px]">Imprint</Link></span>
    <span className="select-none">  © 2020 dinhtan Vietnam Company Limited</span>
      </div>
    </>
  );
};

export default Footer;
