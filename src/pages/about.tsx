import React from "react";
import Layout from "../layout";
import About from "../features/about/about";
import Offer from "../features/about/offer";
import Hero from "../features/about/hero";

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Offer />
    </Layout>
  );
};

export default AboutPage;
