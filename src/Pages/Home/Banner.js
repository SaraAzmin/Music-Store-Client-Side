import React from "react";
import bgImg from "../../Assets/Images/banner.jpg";

const Banner = () => {
  return (
    <div>
      <div
        className="hero lg:min-h-screen bg-no-repeat"
        style={{
          background: `url(${bgImg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-3 md:mb-5 text-2xl md:text-3xl lg:text-5xl font-bold">
              Hello Music Lovers
            </h1>
            <p className="mb-5">
              We supply and manufacture string, brass and woodwind musical
              instruments at very competitive prices. Music Store is a good
              place to shop for a wide range of string, woodwind instruments,
              and cases for musical instruments.
            </p>
            <button className="btn bg-rose-500 hover:scale-110 transition duration-300 ease-in-out hover:bg-red-700">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
