import React from "react";
import FooterBanner from "../../components/honeymoon_samples/FooterBanner.jsx"
import FooterHM from "../../components/honeymoon_samples/Footer.jsx";
import Inspirations from "../../components/honeymoon_samples/Inspiration/Inspirations.jsx"
import Navbar from "../../components/header/navbar.jsx";

const HMHome = () => {
  return (
    <div>
        <div className=""></div>
        <Navbar/>   
        <Inspirations/>
        <FooterBanner/>
        <FooterHM/>
    </div>
  );
};

export default HMHome;
