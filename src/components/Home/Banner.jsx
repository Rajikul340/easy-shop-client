import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";


const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };


  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="bg-[#D7E9F7] items-center md:flex md:gap-4 p-5"
            style={{
                clipPath: " polygon(0 0, 100% 0, 100% 90%, 0 100%)",
            }}
        >
          <div className="md:w-1/2">
            <h1 className="md:text-6xl text-4xl font-bold uppercase">let`s fashion with easy shop</h1>
            <p className="capitalize">
              brand new mens clothes are here .buying product with discount
              let`s start with easy shop
            </p>

            <button className="btn btn-outline my-5 font-bold border border-e-2">get started</button>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://i.ibb.co/7kJnr7X/FV4-A8937-2-1771x2500-removebg-preview-1.png"
              alt="shirt"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-[#D7E9F7] items-center md:flex md:gap-4 p-5"
            style={{
                clipPath: " polygon(0 0, 100% 0, 100% 90%, 0 100%)",
            }}
        >
          <div className="md:w-1/2">
            <h1 className="md:text-6xl text-4xl font-bold uppercase">let`s fashion with easy shop</h1>
            <p className="capitalize my-5">
              brand new mens clothes are here .buying product with discount
              let`s start with easy shop
            </p>

            <button className="btn btn-outline my-5 font-bold border border-e-2">get started</button>
          </div>
          <div className="md:w-1/2">
            <img
              // src="https://i.ibb.co/x5q59Xm/images-removebg-preview.png"
               src="https://i.ibb.co/52frNQJ/marlon-alves-A0m-SSCEVh9-A-unsplash-removebg-preview.png"
              alt="shirt"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-[#D7E9F7] items-center md:flex md:gap-4 p-5"
            style={{
                clipPath: " polygon(0 0, 100% 0, 100% 90%, 0 100%)",
            }}
        >
          <div className="md:w-1/2">
            <h1 className="md:text-6xl text-4xl font-bold uppercase">let`s fashion with easy shop</h1>
            <p className="capitalize">
              brand new mens clothes are here .buying product with discount
              let`s start with easy shop
            </p>

            <button className="btn btn-outline my-5 font-bold border border-e-2">get started</button>
          </div>
          <div className="md:w-1/2">
            <img
             src="https://i.ibb.co/0rkYfhq/3-MTPshfumg-Zuv-DEl1x-Ams-Y9-PRl0-RTKQs-VDl67s-TT-removebg-preview.png"
              alt="shirt"
            />
          </div>
        </div>
      </SwiperSlide>

      <div
        style={{
          marginBottom: "40px",
        }}
        className="autoplay-progress "
        slot="container-end"
      >
        <svg viewBox="0 0 48 48" ref={progressCircle}>
          <circle cx="24" cy="24" r="20"></circle>
        </svg>
        <span ref={progressContent}></span>
      </div>
    </Swiper>
  );
};

export default Banner;
