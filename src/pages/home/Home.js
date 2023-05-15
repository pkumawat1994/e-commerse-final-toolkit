import React from "react";
import AllProducts from "../allProducts/AllProducts";
import Carousel from "../carousel/Carousel";
import Features from "../features/Features";
import Offer from "../offer/Offer";
import Venders from "../contact/Contact";

const Home = () => {
  return (
    <>
      <Carousel />
      <Features />
      <AllProducts />
      <Offer />
      <Venders />
    </>
  );
};

export default Home;
