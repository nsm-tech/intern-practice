import React from "react";
import { LOCATION_DESC } from "./constants";

const Loc: React.FC = () => {
  return (
    <section>
      <div className="container mx-auto pt-20 pb-10 px-4 md:px-20">
        <h2 className="font-bodoni text-4xl md:text-7xl text-center">
          Location
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 md:mt-20">
          {LOCATION_DESC.map((loc) => (
            <div className="bg-white rounded-md w-full shadow-lg p-7 space-y-4">
              <h2 className="text-2xl md:text-5xl font-bodoni">{loc.adress}</h2>
              <p className="font-bold">{loc.floor}</p>
              <p>{loc.street}</p>
              <div className="flex flex-row">
                <img src="./phone.png" className="mr-3" />
                <p>{loc.phone}</p>
              </div>
              <div className="flex flex-row">
                <img src="./clock.png" className="mr-3" />
                <p>{loc.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Loc;
