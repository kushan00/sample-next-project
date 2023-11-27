import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const Slider = ({Navigation , data}) => {
  return (
    <div>
    <Swiper
      modules={[Navigation]}
      slidesPerView={4}
      breakpoints={{
        300: {
          slidesPerView: 1,
        },

        1024: {
          slidesPerView: 4,
          spaceBetween: 2,
        },
      }}
    >
      {data.map((item) => (
        <>
          <SwiperSlide key={item.ID}>
            <div className="sm:w-80 p-4 w-72 text-center sm:text-left mx-auto">
              <div
                className="w-full h-64 border rounded-lg"
                style={{ backgroundImage: item.Image[1] }}
                alt="Banner Image"
              ></div>
              <div className="py-6">
                <h1 className=" text-lg sm:text-xl font-bold">
                  {item.Name}
                </h1>
                <p className="text-gray-500 font-medium">
                  {item.Collection}
                </p>
                <p className="mt-3 text-sm leading-tight">
                  {item.Description}
                </p>
                <button className="bg-primary hover:bg-white text-white text-md hover:text-primary mt-6 font-semibold py-2 px-7 border border-primary rounded-full shadow">
                  Learn more
                </button>
              </div>
            </div>
          </SwiperSlide>
        </>
      ))}
    </Swiper>
  </div>
  )
}

export default Slider