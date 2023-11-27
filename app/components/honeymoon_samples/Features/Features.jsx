import React from "react";
import destination from "../../../../public/images/Group-59.png";
import included from "../../../../public/images/Group-60.png";
import pace from "../../../../public/images/Vector.png";
import Image from "next/image";

const Features = () => {
  return (
    <div className=" max-w-[1280px] mx-auto pb-8 px-4 sm:px-4">
      <div className="py-8 mx-auto ">
        <h1 className="sm:text-3.6xl sm:leading-3.6xl text-2xl font-extrabold text-center sm:mb-4 mb-9 text-primary">
          We are not afraid to be “different”{" "}
        </h1>
        <p className="text-center mx-auto max-w-[40rem] text-gray-500 mb-12 text-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </p>

        <div className="  grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className=" ">
            <div className="flex items-center justify-center">
              <Image
                width={45}
                height={40}
                src={destination}
                alt="destinations-svg"
              ></Image>
              {/* <img src="/honeymoons.lk/Group-59.png" alt="destinations-svg" width={45} /> */}
            </div>
            <h2 className="text-xl font-bold mt-3 mb-2 text-center pt-4 pb-6 max-w-[10rem] mx-auto">
              Handpicked Destinations
            </h2>
            <p className="text-center text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
            </p>
          </div>

          <div className=" ">
            <div className="flex items-center justify-center">
              <Image
                width={45}
                height={45}
                src={included}
                alt="included-svg"
              ></Image>
              {/* <img src="/honeymoons.lk/Group-60.png" alt="included-svg" /> */}
            </div>
            <h2 className="text-xl font-bold mt-4 mb-2 text-center py-6 max-w-[10rem] mx-auto">
              Everything is Included
            </h2>
            <p className="text-center text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
            </p>
          </div>

          <div className=" ">
            <div className="flex items-center justify-center">
              {/* <img src="/honeymoons.lk/Vector.png" alt="convinient-svg" /> */}
              <Image width={45} height={45} src={pace} alt="pace-svg"></Image>
            </div>
            <h2 className="text-xl font-bold mt-4 mb-2 text-center py-6 max-w-[10rem] mx-auto">
              You set the pace
            </h2>
            <p className="text-center text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
