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
          <p className='m-0  text-white font-normal text-5xl'>impossible</p>
          <p className='m-0 text-white font-normal text-5xl'>is nothing</p>
          <span className='text-white mt-4 text-lg font-light'>Four tournaments in the making. Lionel Messi prepares for FIFA World Cup 2022™ with an impossible rondo.</span>
         <div className='btn-infos font-bold'>
            <Link to='/shop' className='btn-shop hover:text-[#a3a2a2] text-md'>Explore now <span className='text-2xl'><BsArrowRight/></span></Link>
            <Link to='/shop' className='btn-shop secs hover:text-[#a3a2a2] text-md'>Shop now<span className='text-2xl'> <BsArrowRight/></span></Link>
         </div>
        </div>
        </div>
      
      </div>
    </>
  )
}

export default Banner