import { Swiper, SwiperSlide } from "swiper/react";
import SwiperComponent from "./SwiperComponent";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { register } from "swiper/element/bundle";
register();

const BannerSlider = ({swiperRef , Pagination , DetailBannerData}) => {
  return (
    <div>
        <div className="w-full">
        <swiper-container
          ref={swiperRef}
          init="false"
          style={{
            "--swiper-pagination-color": "#BF3539",
            "--swiper-pagination-bullet-inactive-color": "#EFCACD",
            "--swiper-pagination-bullet-inactive-opacity": "0.6",
          }}
          modules={[Pagination]}
          slidesPerView={1}
          spaceBetween={0}
          pagination={{ clickable: true }}
        >
          {DetailBannerData.map((item) => (
            <SwiperSlide key={item.ID}>
              <div className="bg-red-50 w-full py-8 mx-auto sm:py-0 sm:h-100 px-4 sm:px-0">
                <div className=" max-w-[1280px] sm:pt-20 mx-auto flex flex-col md:flex-row justify-between">
                  <div className=" sm:w-2/5 rounded-lg ">
                    <div className="bg-center">
                      <SwiperComponent data={DetailBannerData} />
                    </div>
                  </div>
                  {/* <div className="sm:ml-10 ml-0 mx-auto sm:w-full sm:pl-10 pl-0 md:pl-8 flex flex-col justify-between text-center sm:text-left  align-center"> */}
                  <div>
                    <div className="sm:ml-10 mx-auto sm:w-full sm:pl-10 pl-0 md:pl-8 flex flex-col justify-between text-center sm:text-left">
                      <p className="sm:text-lg text-sm mt-6 sm:mt-0 font-medium text-gray-500">
                        {item.Collection}
                      </p>
                      <h1 className="sm:text-4xl font-bold text-xl sm:mt- mt-2 ">
                        {item.Name}
                      </h1>
                      <p className="sm:text-sm text-gray-500 font-medium mt-4">
                        {item.StartingText}
                      </p>
                      <p className="text-lg font-bold text-primary">
                        {item.StartingPrice}
                      </p>
                      <p className=" max-w-[710px] text-gray-500 mt-4">
                        {item.Description}
                      </p>
                      <button className="sm:w-48 mx-auto sm:mx-0 mb-3 sm:mb-0 w-[210px] bg-primary hover:bg-white mt-4 text-white text-md hover:text-primary font-semibold py-3 sm:px-10 border border-primary rounded-full shadow">
                        View Offer
                      </button>
                      <br/><br/>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </swiper-container>
      </div>
    </div>
  )
}

export default BannerSlider