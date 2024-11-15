import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const images = [
  { src: "hero1.png", alt: "Image 1" },
  { src: "hero2.png", alt: "Image 2" },
  { src: "hero3.png", alt: "Image 3" },
  { src: "hero4.png", alt: "Image 4" },
];

const Carousel: React.FC = () => {
  return (
    <section className="relative w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        className="w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-[360px] object-cover md:h-[628px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Carousel;
