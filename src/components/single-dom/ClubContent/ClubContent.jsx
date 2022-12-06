import React from "react";
import { BsCheck2, BsArrowRight } from "react-icons/bs";
import contentclub from "../../../assets/contentclub.jpeg";
function ClubContent() {
  return (
    <>
      <div className="club-body px-4">
        <div
          className="club-title text-3xl uppercase leading-[40px] mt-8 font-extrabold border-t-2 text-left pt-4 lg:pt-0 md:pt-0
        lg:w-[400px] lg:border-0 lg:text-left"
        >
          JOIN DTCLUB. GET REWARDED TODAY.
        </div>
        <div className="mt-4 clip-des">
          <span className="text-[16px] font-normal">
            As an dtClub member you get rewarded with what you love for doing
            what you love. Sign up today and receive immediate access to these
            Level 1 benefits:
          </span>
          <div className="mt-2 flex flex-col p-4 gap-4 club-list">
            <span className="text-[14px] flex items-center gap-4">
              <BsCheck2 />
              Free delivery
            </span>
            <span className="text-[14px] flex items-center gap-4">
              <BsCheck2 /> A 15% off voucher for your nextpurchase{" "}
            </span>
            <span className="text-[14px] flex items-center gap-4">
              <BsCheck2 /> Access to Members Only products and sales{" "}
            </span>
            <span className="text-[14px] flex items-center gap-4">
              <BsCheck2 /> Special offers and promotions
            </span>
          </div>
          <span className="text-[16px] font-normal club-join">
            Join now to start earning points, reach new levels and unlock more
            rewards and benefits from dtclubs.
            <div>
              <a
                href="https://www.adidas.com.vn/en/adiclub"
                className="m-2 p-0 font-normal underline hover:text-yellow-500 cursor-pointer"
              >
                Read more about Free Plans
              </a>
            </div>
          </span>
          <div className="mt-4 club-btn">
            <button
              className="bg-black px-2 py-3 sm:w-98 lg:w-48 text-white uppercase flex items-center justify-center gap-2 font-bold hover:text-[#898989b5]"
              type="submit"
            >
              <span className="text-[14px]"> join the club</span>

              <span className="text-lg">
                <BsArrowRight />
              </span>
            </button>
          </div>
          <div className="mt-6 club-img">
            <img src={contentclub} alt="none" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ClubContent;
