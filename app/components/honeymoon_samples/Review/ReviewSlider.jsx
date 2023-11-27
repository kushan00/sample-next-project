import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const ReviewSlider = ({Navigation , Pagination ,data}) => {
  return (
    <div>
        <Swiper
            style={{
              "--swiper-navigation-color": "#BF3539",
              "--swiper-pagination-color": "#BF3539",
              "--swiper-navigation-size": "15px",
              "--swiper-pagination-bullet-inactive-color": "#CDCDCD",
              "--swiper-pagination-bullet-inactive-opacity": "0.6",
            }}
            modules={[Navigation, Pagination]}
            slidesPerView={2}
            navigation
            pagination={{
              clickable: true,
            }}
            className="review"
            breakpoints={{
              300: {
                slidesPerView: 1,
              },

              1024: {
                slidesPerView: 2,
                spaceBetween: 1,
              },
            }}
          >
            {data.map((item) => (
              <SwiperSlide key={item.ID}>
                <div
                  className={`sm:p-10 p-4 mx-10 sm:h-60 border border-gray-300 rounded-md shadow-md mb-10`}
                >
                  <div className="flex items-center mb-4 ">
                    <div className="flex-shrink-0">
                      <Image
                        src={item.Image}
                        alt="Profile Image"
                        className="w-10 h-10 rounded-full"
                        width={42}
                        height={42}
                      />
                    </div>
                    <div className="ml-2">
                      <h4 className="sm:text-lg font-medium">{item.Name}</h4>
                      <p className="text-sm text-gray-500 font-medium">
                        {item.Collection}
                      </p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm">{item.Description}</p>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-xs">
                      <p className="text-gray-500 mt-2 sm:mt-0">{item.Date}</p>
                    </div>
                    <div className="flex items-center">
                      <p className="text-green-500 text-2xl">
                        &#9733;&#9733;&#9733;&#9733;&#9734;
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
    </div>
  )
}

export default ReviewSlider