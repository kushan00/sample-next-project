"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
register();

const SwiperComponent = ({ data }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      pagination: true,
      injectStyles: [
        `
          .swiper-button-next,
          .swiper-button-prev {
            background-color: rgba(255, 235, 233, 0.6);
            padding: 6px 10px ;
            border-radius: 100%;
            color: #BF3539;
          }
         
      `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  const [isPlaces, setIsPlaces] = useState(false);

  useEffect(() => {
    setIsPlaces(window.location.pathname === "/places");
  }, []);
  return (
    <div className="w-full">
      <swiper-container
        ref={swiperRef}
        init="false"
        style={{
          "--swiper-navigation-color": "#BF3539",
          "--swiper-pagination-color": "#BF3539",
          "--swiper-navigation-size": "25px",
          "--swiper-pagination-bullet-inactive-color": "#FFFFFF",
          "--swiper-pagination-bullet-inactive-opacity": "0.9",
        }}
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        navigation
      >
        {data.map((item, index) => (
          <SwiperSlide key={item.ID}>
            {" "}
            <div
              id="new-swiper"
              className={`h-64 sm:h-80 border mx-auto${
                isPlaces ? "rounded-none" : "rounded-lg"
              }`}
              style={{
                backgroundImage: item.Image[index],
                backgroundSize: "cover",
              }}
              alt="Banner Image"
            ></div>
            <br/><br/>
          </SwiperSlide>
        ))}
      </swiper-container>
    </div>
  );
};

export default SwiperComponent;
