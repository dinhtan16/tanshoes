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
              <Link to="/">Nam</Link>
              <Link to="/">Nữ</Link>
              <Link to="/">Trẻ em</Link>
              <Link to="/">Outlet</Link>
            </div>
          </div>
          <div className="m-4 h-[200px]">
            <h1>SPORTS</h1>
            <div className="flex flex-col gap-2 font-light mt-2 nav-footer">
              <Link to="/">Boost</Link>
              <Link to="/">Quần áo</Link>
              <Link to="/">New Arrival</Link>

            </div>
          </div>
          <div className="m-4 h-[200px]">
            <h1>COLLECTIONS</h1>
            <div className="flex flex-col gap-2 font-light mt-2 nav-footer">
              <Link to="/">Mùa hè 2023</Link>
              <Link to="/">Mùa thu 2023</Link>
              <Link to="/">Mùa đông 2023</Link>
              <Link to="/">Outlet</Link>
            </div>
          </div>
          <div className="m-4">
            <h1 className="shrink-0">COMPANY INFO</h1>
            <div className="flex flex-col gap-2 font-light mt-2 nav-footer">
              <Link to="/">Về chúng tôi</Link>
              <Link to="/">Chính sách và thỏa thuận</Link>
              <Link to="/">Cookies</Link>
              <Link to="/">Cam kết</Link>

            </div>
          </div>
          <div className="m-4 h-[200px]">
            <h1>SUPPORT</h1>
            <div className="flex flex-col gap-2 font-light mt-2 nav-footer">
              <Link to="/">Gửi hỗ trợ</Link>
              <Link to="/">Đăng kí nhận tin</Link>
              <Link to="/">Ủng hộ fanpage</Link>
              <img src={footer} alt="none" className="max-w-[150px]"/>
            </div>
          </div>
          <div className="m-4 h-[200px]">
            <h1>FOLLOW US</h1>
            <div className="flex flex-col gap-2 font-light mt-2 nav-footer">
              <Link to="/">Facebook</Link>
              <Link to="/">0394700410</Link>
              <Link to="/">Hoàng Đình Tấn</Link>
              <Link to="/">Quận 12 - HCM</Link>
            </div>
          </div>
        </div>
      </div>
      <div className=" policy-footer grid grid-cols-2 gap-4 lg:flex justify-center md:grid-cols-2
      bg-gray-900  py-4 font-light mt-8 text-center">
        <span><a href="https://www.adidas.com.vn/en/privacy_policy" className=" pr-6 font-light"> Privacy and policy</a></span>
       <span> <Link to ='/' className=" pr-6font-light">Terms and Conditions</Link></span>
        <span><Link to ='/' className=" pr-6  font-light">Imprint</Link></span>
      <span className="select-none">  © 2020 dinhtan Vietnam Company Limited</span>
      </div>
    </>
  );
};

export default Footer;
