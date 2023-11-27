"use client";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { DetailBannerData } from "./DetailBannerData";
import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
import BannerSlider from "./BannerSlider";
register();

const DetailBanner = ({ data }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      pagination: true,
      injectStyles: [
        `
          .swiper-button-next,
          .swiper-button-prev {
            background-color: #FFEBEB;
            padding: 20px;
            border-radius: 100%;
            color: #BF3539;
          }
      `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  return (
    <div className=" mx-auto py-8 w-full">
      <div className=" px-4 py-8 sm:px-8 mx-auto ">
        <h1 className="sm:text-3.6xl sm:leading-3.6xl text-2xl font-extrabold text-center mb-4  text-primary">
          Offers that you can&apos;t miss
        </h1>
        <p className="text-center mx-auto max-w-[40rem] text-gray-500 mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        </p>
      </div>
      <BannerSlider swiperRef={swiperRef} Pagination={Pagination} DetailBannerData={DetailBannerData}/>
    </div>
  );
};
export default DetailBanner;
