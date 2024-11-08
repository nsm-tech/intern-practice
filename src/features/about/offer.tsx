import React from "react";
import Offer1 from "../../assets/offer/offer1.png";
import Offer2 from "../../assets/offer/offer2.png";
import Offer3 from "../../assets/offer/offer3.png";
import Offer4 from "../../assets/offer/offer4.png";
import Offer5 from "../../assets/offer/offer5.png";
import Offer6 from "../../assets/offer/offer6.png";

const Offer: React.FC = () => {
  return (
    <section className="container mx-auto mt-8">
      <div>
        <h2 className="font-bodoni text-4xl">What we assure,</h2>
        <h2 className="font-bodoni text-4xl">こだわり</h2>
        <div className="grid grid-cols-3 gap-4 mt-20">
          <div className="w-96">
            <img src={Offer1} alt="Offer 1" />
            <h2 className="font-bold text-2xl mt-6">Quality and Freshness</h2>
            <p className="font-light mt-4">
              Our meats are specially chosen by meat specialists and we slice
              them at our restaurant everyday to serve you fresh.
            </p>
          </div>
          <div className="w-96">
            <img src={Offer2} alt="Offer 2" />
            <h2 className="font-bold text-2xl mt-6">Special “ Tare” Sauce”</h2>
            <p className="font-light mt-4">
              We have our homemade sauces, original, spicy miso and garlic. We
              also serve selection of condiment so that customer can create
              their own sauces to enjoy their grilled food.
            </p>
          </div>
          <div className="w-96">
            <img src={Offer3} alt="Offer 3" />
            <h2 className="font-bold text-2xl mt-6">
              Care: smokeless table grill
            </h2>
            <p className="font-light mt-4">
              Knowing that most diners are bothered by the smoke that comes with
              barbeque food, we employed a little Japanese engineering ingenuity
              and installed smokeless table grill.
            </p>
          </div>
          <div className="w-96">
            <img src={Offer4} alt="Offer 4" />
            <h2 className="font-bold text-2xl mt-6">
              Modern Japanese interior
            </h2>
            <p className="font-light mt-4">
              Thoroughly enjoyable and affordable dining experience in a cosy
              environment
            </p>
          </div>
          <div className="w-96">
            <img src={Offer5} alt="Offer 5" />
            <h2 className="font-bold text-2xl mt-6">
              A generous buffet spread
            </h2>
            <p className="font-light mt-4">
              Enjoy over 40 mouthwatering cooked dishes at the buffet counter
              included Karaage and varieties of side dishes.
            </p>
          </div>
          <div className="w-96">
            <img src={Offer6} alt="Offer 6" />
            <h2 className="font-bold text-2xl mt-6">Icy treats</h2>
            <p className="font-light mt-4">
              Buffet counter that serves soft drink and soft-serve ice cream to
              complete meals with full satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
