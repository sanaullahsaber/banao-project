import React from "react";
import "./Banner.css";
import img1 from "../../../assets/banner/Rectangle 2.png";

const Banner = () => {
  return (
    <>
      <div className="banner-container">
        <div className="banner-overlay"></div>
        <img src={img1} className="banner-image" alt="" />
        <div className="banner-text">
          <h3>Computer Engineering</h3>
          <p>142,765 Computer Engineers follow this</p>
        </div>
      </div>
    </>
  );
};

export default Banner;
