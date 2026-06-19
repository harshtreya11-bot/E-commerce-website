import React from "react";
import Topproduct1 from "../../assets/Topproducts/Topproduct1.png";
import Topproduct2 from "../../assets/Topproducts/Topproduct2.png";
import Topproduct3 from "../../assets/Topproducts/Topproduct3.png";
import { FaStar } from "react-icons/fa";
const ProductsData = [
  {
    id: 1,
    img: Topproduct1,
    title: "Printed Shirts",
    Discription:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, quod.",
    price: "399",
  },
  {
    id: 2,
    img: Topproduct2,
    title: "Women Western Dress",
    Discription:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, quod.",
    price: "499",
  },
  {
    id: 3,
    img: Topproduct3,
    title: "Earbuds",
    Discription:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, quod.",
    price: "699",
  },
];
const TopProduct = () => {
  return (
    <div>
      <div className="container">
        {/* header section*/}
        <div className=" bg-gray-100 dark:bg-gradient-to-r dark:from-blue-400 dark:to-blue-500 text-left mb-24">
          <p
            data-aos="fade-up"
            className="text-sm text-primary dark:text-white"
          >
            Top Rated product for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Best Products
          </h1>
          <p
            data-aos="fade-up"
            className="text-xs text-gray-400 dark:text-primary"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam,
            quod.
          </p>
        </div>
        {/* Body Section*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 md:grid-cols-3 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              className="rounded-2xl bg-gray-300 dark:bg-gradient-to-r dark:from-primary dark:to-blue-500 hover:bg-gray-800/60 dark:hover:bg-primary/40 dark:text-white hover:text-primary relative shadoe-xl
            duration-high group ax-w-[200px] ax-h-[250px]"
            >
              {/* Image section*/}
              <div className="h-[210px] ">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[340px] block mx-auto transform -translate-y-20  group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* info section*/}
              <div className="p-8 text-center">
                {/*Star Rating*/}
                <div className="flex items-center justify-center w-full gap-2">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-sm text-gray-800 dark:text-gray-200">
                  {data.Discription}
                </p>
                <p className="text-xl font-bold">${data.price}</p>
                <button
                  className="bg-gradient-to-r from-primary to-blue-600 transition-all
                      duration-200 text-white py-2 px-4 rounded-full flex items-center gap-3
                      group hover:scale-105 cursor-pointer mt-5 mx-auto"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProduct;
