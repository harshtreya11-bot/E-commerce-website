import React from "react";
import Logo from "../../assets/logo.png";
import { IoIosSearch } from "react-icons/io";
import { IoCart } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
import Darkmode from "./Darkmode";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "#",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "#",
  },
  {
    id: 4,
    name: "Mens Wear",
    link: "#",
  },
  {
    id: 5,
    name: "Womens Wear",
    link: "#",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Winter Specials",
    link: "/#",
  },
  {
    id: 2,
    name: "Watch Collections",
    link: "/#",
  },
  {
    id: 3,
    name: "Sneakers Collection",
    link: "/#",
  },
  {
    id: 4,
    name: "Valentine Specials",
    link: "/#",
  },
];

const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gradient-to-r dark:from-primary dark:to-blue-500 dark:text-white duration-300 relative z-40">
      {/* upper Navbar */}
      <div className="bg-primary/40 backdrop-blur-sm py-3 sm:py-0">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div>
            <a
              href="#"
              className="font-bold text-2xl sm:text-3xl flex gap-2 text-black dark:text-white"
            >
              <img src={Logo} alt="Logo" className="w-10" />
              Astrave
            </a>
          </div>

          {/* Search bar, Order button, Dark mode */}
          <div className="flex justify-between items-center gap-4">
            {/* Search */}
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px]
                transition-all duration-300 rounded-full border
                border-gray-300 px-2 py-1 focus:outline-none focus:outline-1
                focus:border-gray-400
                dark:border-gray-600 dark:focus:border-gray-300 dark:bg-gray-700 dark:text-white"
              />
              <IoIosSearch
                className="text-gray-500 group-hover:text-primary
                absolute top-1/2 -translate-y-1/2 right-3"
              />
            </div>

            {/* Order Button */}
            <button
              onClick={() => alert("In development right now...")}
              className="bg-gradient-to-r from-blue-900 to-blue-800 transition-all duration-200
              text-white px-4 py-1 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <IoCart className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>

            {/* Dark Mode Toggle */}
            <Darkmode />
          </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div className="flex justify-center bg-white dark:bg-gradient-to-r dark:from-blue-200 dark:to-blue-500">
        <ul className="sm:flex hidden items-center gap-4  ">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 py-3 text-gray-700 dark:text-white
              hover:text-blue-900 dark:hover:text-blue-900 duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
          {/*Simple Dropdown and Links*/}
          <li className="group relative cursor-pointer  ">
            <a
              href="#"
              className="flex items-center gap-[2px] py-3 px-4 duration-200 text-gray-700 dark:text-white hover:text-primary dark:hover:text-blue-100"
            >
              New Arrivals
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md">
              <ul className="flex flex-col">
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20 hover:text-blue-600"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
