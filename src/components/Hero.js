import React from "react";
import combined from "../images/combined.png";
import { ImLocation } from "react-icons/im";
import rings from "../images/rings.png";
function Hero() {
  return (
    <div
      style={{ height: "105vh" }}
      className="relative  overflow-hidden flex items-center justify-center "
    >
      <div className="absolute inset-0     opacity-90 bg-hero-pattern bg-cover bg-no-repeat ">
        <div className="relative z-10 text-white text-center pt-28 backdrop-blur-xl">
          <h1
            style={{ fontFamily: "lobster", letterSpacing: "2.5px" }}
            className="text-5xl  lg:z-20  lg:text-white sm:text-4xl md:text-5xl lg:text-9xl  leading-tight mb-6 p-4 pt-8 drop-shadow-2xl font-extrabold"
          >
            Sharon Nadar
            <div className="flex justify-center ">
              <img loading="lazy" className="h-28 w-28" src={rings} alt="" />
            </div>
            Vijayraja Nadar
          </h1>

          <div className="flex items-center justify-center pt-4 mb-4 ">
            <img
              loading="lazy"
              className="  w-64 h-64 "
              src={combined}
              alt=""
            />
          </div>
          <button className="px-10 relative text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-relaxed max-w-xl mx-auto bg-regalbrown py-1 rounded-lg hover:bg-gray-900 mt-24">
            <ImLocation className="absolute left-3 top-2" />
            <a href="#address">Location</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
