import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Logo from "../../assets/logo.png";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-gradient-to-r dark:from-primary dark:to-blue-500 text-black dark:text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <a
              href="#"
              className="font-bold text-2xl sm:text-3xl flex gap-2 items-center"
            >
              <img src={Logo} alt="Logo" className="w-10" />
              Astrave
            </a>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-200">
              Elevate your style with our premium collection. We provide the
              best quality products for men, women, and kids.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-white dark:bg-gray-700 p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300 shadow-md"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="bg-white dark:bg-gray-700 p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300 shadow-md"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="bg-white dark:bg-gray-700 p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300 shadow-md"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="bg-white dark:bg-gray-700 p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300 shadow-md"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:pl-10">
            <h1 className="text-xl font-bold mb-4 border-b-2 border-primary w-fit pb-1">
              Quick Links
            </h1>
            <ul className="space-y-2">
              {FooterLinks.map((data, index) => (
                <li key={index}>
                  <a
                    href={data.link}
                    className="inline-block text-gray-600 dark:text-gray-200 hover:text-primary dark:hover:text-white hover:translate-x-2 transition-all duration-300"
                  >
                    {data.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h1 className="text-xl font-bold mb-4 border-b-2 border-primary w-fit pb-1">
              Contact Us
            </h1>
            <div className="space-y-2 text-gray-600 dark:text-gray-200">
              <p className="flex items-center gap-2">
                <span className="text-primary">📍</span> 123 Fashion Street, NY
              </p>
              <p className="flex items-center gap-2">
                <span className="text-primary">📞</span> +1 234 567 890
              </p>
              <p className="flex items-center gap-2">
                <span className="text-primary">✉️</span> support@astrave.com
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-5 border-t border-gray-300 dark:border-gray-600 text-center text-sm text-gray-500 dark:text-gray-300">
          © {new Date().getFullYear()} Astrave. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
