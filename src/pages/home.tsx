import React from "react";
import Layout from "../layout";
import Carousel from "../features/home/carousel";
import About from "../features/home/about";
import Features from "../features/home/features";
import Loc from "../features/home/location";
import Menu from "../features/home/menu";

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Carousel />
      <About />
      <Features />
      <Menu />
      <Loc />
    </Layout>
  );
};

export default HomePage;
