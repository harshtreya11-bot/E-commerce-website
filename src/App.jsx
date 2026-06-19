import React from "react";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Product/product";
import TopProduct from "./components/TopProduct/TopProduct";
import Banner from "./components/Banner/banner";
import TopSelling from "./components/TopSellingProducts/top_selling_products";
import Testimonial from "./components/Testimonial/testimonial";
import Footer from "./components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Subscribe from "./components/Subscribe/Subscribe";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
      <TopProduct />
      <Banner />
      <Subscribe />
      <TopSelling />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
