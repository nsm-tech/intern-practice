import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { LOCATION_DESC } from "../location/constants";

const Loc: React.FC = () => {
  return (
    <section className="pt-20 pb-10 ">
      <h2 className="font-bodoni text-4xl md:text-7xl text-center">Location</h2>
      <div className="md:pl-40 pl-0">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          pagination={{ clickable: true }}
          className="mt-10 md:mt-20"
        >
          {LOCATION_DESC.map((loc, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-md w-96 shadow-lg p-7 space-y-4">
                <h2 className="text-2xl md:text-5xl font-bodoni">
                  {loc.adress}
                </h2>
                <p className="font-bold">{loc.floor}</p>
                <p>{loc.street}</p>
                <div className="flex flex-row items-center">
                  <img src="./phone.png" alt="Phone" className="mr-3" />
                  <p>{loc.phone}</p>
                </div>
                <div className="flex flex-row items-center">
                  <img src="./clock.png" alt="Clock" className="mr-3" />
                  <p>{loc.time}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Loc;
