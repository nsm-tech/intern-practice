import React, { useState } from "react";
import { MENU_ITEMS } from "./constants";

const Menu: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string>("Lunch Menu");

  const buttons: string[] = [
    "Lunch Menu",
    "Combo Lunch Menu",
    "Grand Menu",
    "Combo Grand Menu",
  ];

  return (
    <section>
      <div
        className="relative bg-cover bg-center bg-no-repeat h-[335px] flex flex-col items-center justify-center space-y-6"
        style={{ backgroundImage: "url('/menu.png')" }}
      >
        <h2 className="md:text-6xl text-2xl font-bodoni text-white">
          Our Menu
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-12">
          {buttons.map((button) => (
            <button
              key={button}
              onClick={() => setActiveButton(button)}
              className={`md:text-2xl md:w-[290px] w-full py-6 px-2 rounded-lg shadow-md transition ${
                activeButton === button
                  ? "bg-primary text-white"
                  : "bg-white text-primary"
              }`}
            >
              {button}
            </button>
          ))}
        </div>
      </div>
      <div className="bg-gray-100 -mt-1">
        <div className="container mx-auto px-4 md:px-20">
          <div className="grid grid-cols-1 gap-6">
            {MENU_ITEMS.filter((item) => item.menu === activeButton).map(
              (item, index) => (
                <div
                  key={index}
                  className="bg-white border-[3px] flex flex-col md:flex-row items-center border-primary shadow-lg p-10 space-y-4"
                >
                  <img
                    src={item.img}
                    alt={item.menu}
                    className="h-full object-cover rounded-lg mb-4"
                  />
                  <div className="space-y-4 md:ml-8">
                    <p className="text-2xl md:text-3xl font-bold">
                      {item.menu}
                    </p>
                    <p className="text-xl md:text-2xl">Adult: {item.adult}</p>
                    <p className="text-xl md:text-2xl">Senior: {item.senior}</p>
                    <p className="text-xl md:text-2xl">Child: {item.child}</p>
                    <button className="bg-primary py-2 px-6 rounded-2xl text-xl md:text-2xl text-white">
                      View Details
                    </button>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
