import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import adidas from "../../../assets/adidas.jpg";
import "./slide.scss";
// import required modules
import { Pagination,Navigation, Autoplay } from "swiper";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";

export default function SlideProducts() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="6" className="font-extrabold text-3xl py-4">Still interested?</Col>
          <Col>
            <Swiper
              slidesPerView={5}
              spaceBetween={20}
              breakpoints={{
                // when window width is >= 640px
                0: {
                  slidesPerView: 1,
                },
                480: {
                  slidesPerView: 2,
                },
                640: {
                  slidesPerView: 3,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 4,
                },
                1024: {
                  slidesPerView: 5,
                },
              }}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              draggable={true}
              navigation={true}
              modules={[Pagination,Navigation,Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide className="item-slide">
                <img src={adidas} alt="" />
              </SwiperSlide>
              <SwiperSlide className="item-slide"><img src={adidas} alt="" /></SwiperSlide>
              <SwiperSlide><img src={adidas} alt="" /></SwiperSlide>
              <SwiperSlide><img src={adidas} alt="" /></SwiperSlide>
              <SwiperSlide><img src={adidas} alt="" /></SwiperSlide>
              <SwiperSlide><img src={adidas} alt="" /></SwiperSlide>
              <SwiperSlide><img src={adidas} alt="" /></SwiperSlide>
              <SwiperSlide><img src={adidas} alt="" /></SwiperSlide>
              <SwiperSlide><img src={adidas} alt="" /></SwiperSlide>
            </Swiper>
          </Col>
        </Row>
      </Container>
    </>
  );
}
