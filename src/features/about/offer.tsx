import React from "react";
import { OFFERS } from "./constants";

const Offer: React.FC = () => {
  return (
    <section className="container px-5 md:mx-auto my-8">
      <h2 className="font-bodoni text-2xl md:text-4xl">What we assure,</h2>
      <h2 className="font-bodoni text-2xl md:text-4xl">こだわり</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 md:mt-20">
        {OFFERS.map((offer) => (
          <div
            key={offer.title}
            className="md:w-96 w-full flex flex-row md:flex-col items-center md:items-start space-x-6 md:space-x-0 md:space-y-4"
          >
            <img src={offer.img} alt="offer" className="w-[108px] md:w-full" />
            <div className="md:w-full w-full">
              <h2 className="font-bold text-lg md:text-2xl">{offer.title}</h2>
              <p className="font-light text-sm md:text-[16px] mt-2">
                {offer.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offer;
