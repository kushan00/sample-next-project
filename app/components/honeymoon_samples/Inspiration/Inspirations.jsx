"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Slider from "./Slider";
import { Data } from "./Data";


const Inspirations = () => {
  return (
    <div className="bg-gray-50 pb-12">
      <div className="container py-8 sm:px-8 mt-10 sm:mt-20">
        <h1 className="pl-16 text-3.6xl leading-3.6xl font-bold  mb-4 sm:mt-10 text-primary max-w-[28rem]">
          Inspiration for your next getaway
        </h1>
        <p className=" pl-16 max-w-[40rem] text-gray-500 mb-12 text-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <Slider Navigation={Navigation} data={Data}/>
    </div>
  );
};
export default Inspirations;
