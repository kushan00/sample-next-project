"use client";
import React, { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsHeart } from "react-icons/bs";
import { HiOutlineCalendar, HiOutlineSearch } from "react-icons/hi";
import { WiNightAltCloudy } from "react-icons/wi";
import { ImSmile } from "react-icons/im";
import { RxDividerVertical } from "react-icons/rx";
import Link from "next/link";

const Search = () => {
  const [isSearchResults, setIsSearchResults] = useState(false);

  useEffect(() => {
    setIsSearchResults(
      window.location.pathname === "/SearchResults" ||
        window.location.pathname === "/offers" ||
        window.location.pathname === "/places" ||
        window.location.pathname === "/scenaries"
    );
  }, []);

  return (
    //     <div
    //     className={`mt-8 sm:flex px-4 border items-center sm:py-2 justify-center sm:px-4 bg-white mx-auto rounded-lg sm:rounded-full py-4 ${
    //       isSearchResults ? 'justify-between rounded-full w-full' : 'sm:max-w-[65vw]' }`}
    //   >
    //    <div className="mb-3 sm:mb-0 text-sm text-semibold mx-2 flex items-center rounded-full sm:rounded-none border sm:border-none border-gray-200 py-2 px-4 sm:px-0 justify-between">
    //       <span className="pr-3">
    //         <BsHeart />
    //       </span>
    //       Occasion <MdKeyboardArrowDown />
    //       <div className="w-px bg-gray-400 h-5 ml-16 hidden sm:block "></div>
    //     </div>
    //     <div className="mb-3 sm:mb-0 text-sm text-semibold mx-2 flex items-center rounded-full sm:rounded-none border sm:border-none border-gray-200 py-2 px-4 sm:px-0 justify-between">
    //       <span className="pr-3">
    //         <ImSmile />
    //       </span>
    //       Scenery<MdKeyboardArrowDown />
    //       <div className="w-px bg-gray-400 h-5 ml-16 hidden sm:block"></div>
    //     </div>
    //     <div className="mb-3 sm:mb-0 text-sm text-semibold mx-2 flex items-center rounded-full sm:rounded-none border sm:border-none border-gray-200 py-2 px-4 sm:px-0 justify-between">
    //       <span className="pr-3">
    //         <HiOutlineCalendar />
    //       </span>
    //       Check-In <MdKeyboardArrowDown />
    //       <div className="w-px bg-gray-400 h-5 ml-16 hidden sm:block"></div>
    //     </div>
    //     <div className="mb-3 sm:mb-0 text-sm text-semibold mx-2 flex items-center rounded-full sm:rounded-none border sm:border-none border-gray-200 py-2 px-4 sm:px-0 justify-between">
    //       <span className="pr-3">
    //         <WiNightAltCloudy size={22} />
    //       </span>
    //       Number of Nights <MdKeyboardArrowDown />

    //     </div>
    //     <Link legacyBehavior href='/SearchResults'>
    //     <button className=" w-full h-10 sm:ml-4 sm:w-auto mt-7 sm:mt-0 justify-center bg-primary hover:bg-white text-white hover:text-primary font-medium py-1 px-9 border border-primary rounded-full shadow flex items-center gap-2">
    //       <HiOutlineSearch /> Search
    //     </button>
    //     </Link>
    //   </div>

    // =============================================================
    <div
      className={`bg-white items-center sm:flex px-4 sm:px-2 rounded-3xl sm:rounded-full sm:py-0 py-6 mt-7 font-medium ${
        isSearchResults
          ? "justify-start max-w-7xl mx-auto border mx-6 w-[90vw] sm:gap-6"
          : "md:h-[60px] md:gap-6"
      }`}
    >
      <div className="sm:flex align-center justify-start items-center gap-6">
        <div className="flex items-center mr-0 gap-4 mb-3 sm:mb-0 text-sm text-semibold mx-2 flex py-2 items-center rounded-full sm:rounded-none border sm:border-none border-gray-200 px-4 sm:px-0">
          <BsHeart />
          <div className="flex items-center gap-12 sm:gap-1">
            Occasion <MdKeyboardArrowDown />
          </div>
        </div>
          <div className="hidden sm:block ">
            <RxDividerVertical size={32} style={{ color: "grey" }} />
          </div>
        <div className="flex mr-0 ml-0 items-center gap-4 mb-3 sm:mb-0 text-sm text-semibold mx-2 flex py-2 items-center rounded-full sm:rounded-none border sm:border-none border-gray-200 px-4 sm:px-0">
          <ImSmile />
          <div className="flex items-center gap-12 sm:gap-1">
            Scenery <MdKeyboardArrowDown />
          </div>
        </div>
        <div className="hidden sm:block">
            <RxDividerVertical size={32} style={{ color: "grey" }} />
          </div>
        <div className="flex mr-0 ml-0 items-center gap-4 mb-3 sm:mb-0 text-sm text-semibold mx-2 flex py-2 items-center rounded-full sm:rounded-none border sm:border-none border-gray-200 px-4 sm:px-0">
          <HiOutlineCalendar />
          <div className="flex items-center gap-12 sm:gap-1">
            Check-In <MdKeyboardArrowDown />
          </div>
        </div>
        <div className="hidden sm:block">
            <RxDividerVertical size={32} style={{ color: "grey" }} />
          </div>
        <div className="flex mr-0 ml-0 items-center gap-4 mb-3 sm:mb-0 text-sm text-semibold mx-2 flex py-2 items-center rounded-full sm:rounded-none border sm:border-none border-gray-200 px-4 sm:px-0">
          <WiNightAltCloudy size={22} />
          <div className="flex items-center gap-12 sm:gap-1">
            Number of Nights <MdKeyboardArrowDown />
          </div>
        </div>
        <div className="hidden sm:block">
          <RxDividerVertical size={32} style={{ color: "grey" }} />
        </div>
      </div>
      <div className="">
        <Link legacyBehavior href="/SearchResults">
          <button className="mt-6  sm:mt-0 w-full h-10 bg-primary hover:bg-white text-white hover:text-primary font-medium py-1 px-9 border border-primary rounded-full shadow flex justify-center items-center gap-2">
            <HiOutlineSearch />
            Search
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Search;
