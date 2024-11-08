import React from "react";
import { Carousel } from "react-responsive-carousel";
import HeroImage1 from "../../assets/hero/hero1.png";
import HeroImage2 from "../../assets/hero/hero2.png";
import HeroImage3 from "../../assets/hero/hero3.png";
import HeroImage4 from "../../assets/hero/hero4.png";

const Test: React.FC = () => {
  return (
    <div className="relative w-full max-w-full">
      <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        showStatus={false}
        swipeable={true}
      >
        {[HeroImage1, HeroImage2, HeroImage3, HeroImage4].map(
          (image, index) => (
            <div key={index} className="w-full">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto object-contain"
              />
            </div>
          )
        )}
      </Carousel>
    </div>
  );
};

export default Test;
