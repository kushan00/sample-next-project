"use client";
import { Navigation, Pagination } from "swiper";
import ReviewSlider from "./ReviewSlider";
import { ReviewData } from "./ReviewData";

const Review = () => {
  return (
    <div>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-4">
        <div className="  py-8 mx-auto ">
          <h1 className="sm:text-3.6xl sm:leading-3.6xl text-2xl font-extrabold text-center mb-4 mt-6 text-primary">
            Customers Review
          </h1>
          <p className="text-center max-w-[40rem] mx-auto text-gray-500 mb-12 text-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          </p>

          <ReviewSlider Navigation={Navigation} Pagination={Pagination} data={ReviewData} />
        </div>
      </div>
    </div>
  );
};

export default Review;
