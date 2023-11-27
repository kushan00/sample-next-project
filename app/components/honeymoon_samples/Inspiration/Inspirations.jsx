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
      <Slider Navigation={Navigation} data={Data}/>
    </div>
  );
};
export default Inspirations;
