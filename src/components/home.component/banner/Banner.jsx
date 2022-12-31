import React from 'react'
import './banner.scss'
import { Link } from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs'
const Banner = () => {
  return (
    <>
      <div className="banner-content">
        <div className="bgr-banner h-[100vh] max-h-[700px] relative">
        <div className="banner-info flex flex-col max-w-[416px] absolute top-[30%] left-[10%]">
          <p className='m-0  text-white font-extrabold text-5xl text-shadow'>BST TẾT NGUYÊN ĐÁN 2023</p>
          <span className='text-white mt-4 text-lg font-normal text-shadow'>Tỏa sáng năm mới theo cách riêng</span>
         <div className='btn-infos font-bold'>
            <Link to='/shop' className='btn-shop  text-md'>Explore now <span className='text-2xl'><BsArrowRight/></span></Link>
            <Link to='/shop' className='btn-shop secs  text-md'>Shop now<span className='text-2xl'> <BsArrowRight/></span></Link>
         </div>
        </div>
        </div>
      
      </div>
      <div className="banner-content">
        <div className="bgr-banner-2 h-[100vh] max-h-[700px] relative">
        <div className="banner-info flex flex-col max-w-[416px] absolute top-[30%] left-[10%]">
          <p className='m-0  text-white font-normal text-2xl bg-black leading-10'>Đăng ký hoặc đăng nhập để nhận thêm 10% tại giỏ hàng. Áp dụng loại trừ. Điều khoản và điều kiện áp dụng.</p>
         <div className='btn-infos font-bold'>
            <Link to='/shop' className='btn-shop hover:text-[#a3a2a2] text-md'>Explore now <span className='text-2xl'><BsArrowRight/></span></Link>
         </div>
        </div>
        </div>
      
      </div>
    </>
  )
}

export default Banner