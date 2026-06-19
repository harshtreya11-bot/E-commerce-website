import React from "react";
import Banner from "../../assets/Banner/Bannerimage.png";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100%",
};

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-gradient-to-r from-gray-200 to-gray-600 dark:bg-gradient-to-r dark:from-primary dark:to-blue-400 text-white"
      style={BannerImg}
    >
      <div className="container  py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold text-black dark:text-white">
            Get Notified About New Products
          </h1>
          <input
            data-aos="fade-up"
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 dark:focus:ring-secondary"
          />
          <div className="flex items-center justify-center mt-5">
            <button
              onClick={() => alert("In development right now...")}
              className=" w-full flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-800 transition-all duration-200
              text-white px-4 py-1 rounded-full gap-3 group hover:scale-105 shadow-lg"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
