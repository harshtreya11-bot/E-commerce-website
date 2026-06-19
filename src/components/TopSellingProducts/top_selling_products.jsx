import React from "react";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Img1 from "../../assets/Women/Womenimage1.png";
import Img2 from "../../assets/Women/kurtis.png";
import Img3 from "../../assets/Women/menswear.jpeg";
import Img4 from "../../assets/Women/tshirts.png";
import Img5 from "../../assets/Women/kidswear.png";
import Img6 from "../../assets/Women/watches.png";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Womens Wear",
    rating: 5.0,
    color: "White",
    aosDelay: 0,
  },

  {
    id: 2,
    img: Img2,
    title: "Kurtis",
    rating: 4.5,
    color: "Red",
    aosDelay: 200,
  },

  {
    id: 3,
    img: Img3,
    title: "Men Wear",
    rating: 4.7,
    color: "Brown",
    aosDelay: 400,
  },

  {
    id: 4,
    img: Img4,
    title: "T-shirt",
    rating: 4.4,
    color: "Black",
    aosDelay: 600,
  },

  {
    id: 5,
    img: Img5,
    title: "Kids Wear",
    rating: 4.5,
    color: "Blue",
    aosDelay: 800,
  },

  {
    id: 6,
    img: Img6,
    title: "Watches",
    rating: 4.8,
    color: "Brown",
    aosDelay: 1000,
  },
];
const product = () => {
  return (
    <div className="mt-10 mb-12">
      <div>
        {/*Header Section*/}
        <div className="bg-gray-100 dark:bg-gradient-to-r dark:from-blue-200 dark:to-blue-500 text-center mb-10 mx-0">
          <p
            data-aos="fade-up"
            className="text-sm text-primary dark:text-white"
          >
            Top Selling product for you
          </p>
          <h1
            data-aos="fade-up"
            className="text-black dark:text-white inline-block text-3xl font-bold"
          >
            Top Selling Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-black dark:text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam,
            quod.
          </p>
        </div>
        {/*Body Section*/}
        <div
          className="container bg-gray-100 dark:bg-gradient-to-r dark:from-primary dark:to-blue-500 mt-10 pb-10 
        rounded-2xl margin-left-3.5rem margin-right-3.5rem"
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="mySwiper"
          >
            {/*CardSection*/}
            {ProductsData.map((data) => (
              <SwiperSlide key={data.id}>
                <div
                  className="space-y-3 flex flex-col items-center"
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                  key={data.id}
                >
                  <img
                    src={data.img}
                    alt="image"
                    className="mt-16 w-[250px] h-[250px] object-cover rounded-md"
                  />
                  <div>
                    <h3 className="text-gray-800 dark:text-gray-200 font-semibold">
                      {data.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {data.color}
                    </p>
                    {/*Star Rating*/}
                    <div className="flex items-center justify-between gap-1">
                      <FaStar className="text-yellow-400" />
                      <span className="text-gray-800 dark:text-gray-200">
                        {data.rating}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/*View All Button*/}
          <div className="flex items-center justify-center mt-10">
            <button className="bg-primary text-white px-4 py-1 rounded-full gap-3 group">
              VIEW ALL PRODUCTS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default product;
