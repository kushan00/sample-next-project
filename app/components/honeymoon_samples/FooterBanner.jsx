import React from "react";

const FooterBanner = () => {
  return (
    <div className="bg-primary">
      <div className="sm:mt-10 bg-primary text-white text-center flex flex-col items-center justify-center h-80 max-w-[1280px] mx-auto px-4 sm:px-0">
        <h1 className="text-4xl font-bold text-center mb-4 mt-6">
          How we can help?
        </h1>
        <p className="text-center mx-auto text-white mb-12 text-lg">
          Our experts are a filled-form away to provide complete seclusion for
          your Love Story
        </p>
        <button className="sm:w-40 w-[200px] bg-white text-primary hover:text-gray-500 font-semibold py-3 sm:px-4 border border-red-700 rounded-full shadow">
          View Details
        </button>
      </div>
    </div>
  );
};

export default FooterBanner;
