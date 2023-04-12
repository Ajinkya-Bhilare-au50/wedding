import React from "react";
import vijay from "../images/vijay.png";
import sharon from "../images/sharon.png";
import heart from "../images/heart.png";
const ImageSlider = () => {
  return (
    <div>
      <div
        className="flex justify-center gap-0 p-0 flex-wrap bg-gray-200"
        style={{
          backgroundColor: "",
        }}
      >
        <img
          loading="lazy"
          className=" xs:h-96 xs:w-96 lg:h-96 lg:w-96 "
          src={vijay}
          alt="s"
        />
        <img
          loading="lazy"
          className="xs:h-96 xs:w-full lg:h-40 lg:w-40 lg:self-center"
          src={heart}
          alt="s"
        />
        <img
          loading="lazy"
          className="xs:h-96 xs:w-96 lg:h-96 lg:w-96"
          src={sharon}
          alt="s"
        />
      </div>
    </div>
  );
};

export default ImageSlider;
