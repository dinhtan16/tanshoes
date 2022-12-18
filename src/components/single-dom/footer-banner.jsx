import React from 'react'
import {BsArrowRight} from 'react-icons/bs'
export const Banner = () => {
  return (
    <>

    <div className="banner bg-[#EDE734] w-full mt-8">
        <div className='max-w-[960px] w-full mx-auto px-12 flex items-center justify-center gap-8 py-8 h-auto'>
            <span className='text-[32px] max-w-[450px] w-full font-bold'>
            BECOME A MEMBER & GET 15% OFF
            </span>
            <div>
           <button
                  className="bg-black px-2 py-3 w-48 text-white uppercase flex items-center justify-center gap-2 font-bold hover:text-[#898989b5]"
                  type="submit"
                >
                  <span className="text-[14px]"> join the club</span>
                
                  <span className="text-lg">
                    <BsArrowRight />
                  </span>
                </button>
           </div>
        </div>
        
      </div>
      
    </>
  )
}
