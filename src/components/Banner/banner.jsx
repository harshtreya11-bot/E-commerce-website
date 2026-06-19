import React from "react";
import BannerImg from "../../assets/Banner/Bannerimage.png";
import { GrPaypal, GrSecure, GrSupport } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { CiDeliveryTruck } from "react-icons/ci";

const banner = () => {
  return (
    <div
      className="min-h-[550px] flex justify-center
    items-center py-12 sm:py-0 "
    >
      <div className="container min-h-[450px] dark:bg-gradient-to-r dark:from-blue-600 dark:to-primary">
        <div
          className="grid grid-cols-1 md:grid-cols-2
        gap-4 place-items-center"
        >
          {/* Image Section */}
          <div data-aos="zoom-in" className="flex items-center justify-center">
            <img
              src={BannerImg}
              alt=""
              className=" max-w-[300px] h-[300px] md:max-w-[400px] md:h-[350px] w-full mx-auto
              drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover md:mt-8 border-2 rounded-xl"
            />
          </div>
          {/* Text Section */}
          <div className="flex flex-col justify-center items-center gap-3">
            <h1
              data-aos="fade-up"
              className="mt-6 text-black dark:text-white text-5xl md:text-7xl font-bold"
            >
              Summer Sale is live
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-sm text-black dark:text-gray-400"
            >
              Get up to 70% off on all products.
            </p>
            <div>
              <div className="flex items-center gap-4">
                <GrSecure
                  className="text-4xl h-11 w-12 shadow-sm p-4 rounded-full bg-gray-200 dark:bg-blue-400"
                  data-aos="fade-up"
                  data-aos-delay="500"
                />
                <p
                  data-aos="fade-up"
                  data-aos-delay="500"
                  className=" text-black dark:text-white"
                >
                  Quality Products
                </p>
              </div>
              <div className=" mt-5 flex items-center gap-4">
                <RiSecurePaymentLine
                  className="text-4xl h-11 w-12 shadow-sm p-4 rounded-full bg-gray-200 dark:bg-blue-400"
                  data-aos="fade-up"
                  data-aos-delay="500"
                />
                <p
                  data-aos="fade-up"
                  data-aos-delay="500"
                  className="text-black dark:text-white"
                >
                  Secure Payments
                </p>
              </div>
              <div className="mt-5 flex items-center gap-4">
                <BiSupport
                  className="text-4xl h-11 w-12 shadow-sm p-4 rounded-full bg-gray-200 dark:bg-blue-400"
                  data-aos="fade-up"
                  data-aos-delay="500"
                />
                <p
                  data-aos="fade-up"
                  data-aos-delay="500"
                  className="text-10 text-black dark:text-white"
                >
                  24/7 Support
                </p>
              </div>
              <div className="mt-5 flex items-center gap-4">
                <CiDeliveryTruck
                  className="text-4xl h-11 w-12 shadow-sm p-4 rounded-full bg-gray-200 dark:bg-blue-400"
                  data-aos="fade-up"
                  data-aos-delay="500"
                />
                <p
                  data-aos="fade-up"
                  data-aos-delay="500"
                  className="text-10 text-black dark:text-white"
                >
                  Fast Delivery
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default banner;
