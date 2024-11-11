import React from "react";
import Bg from "../../assets/hero.png";

const Hero: React.FC = () => {
  return (
    <section
      className=" h-[520px] bg-cover bg-center"
      style={{ backgroundImage: `url(${Bg})` }}
    ></section>
  );
};

export default Hero;
