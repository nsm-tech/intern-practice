import React from "react";
import Bg from "/hero.png";

const Hero: React.FC = () => {
  return (
    <section
      className=" md:h-[520px] h-[220px] bg-cover bg-center"
      style={{ backgroundImage: `url(${Bg})` }}
    ></section>
  );
};

export default Hero;
