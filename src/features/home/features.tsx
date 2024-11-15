import React from "react";

const Features: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100 text-center mt-8">
      <div className="container mx-auto px-8">
        <div>
          <h2 className="md:text-7xl text-3xl font-bodoni">Buffet Step</h2>
          <p className="md:text-2xl text-base font-bold text-primary mt-4">
            Enjoy Japanese BBQ with your own way!
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 text-2xl">
          <div className="flex flex-col items-center">
            <img
              src="fitur1.svg"
              alt="Choose your meat course"
              className="mb-6"
            />
            <p className="text-center">Choose your meat course</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="fitur2.svg" alt="Choose your rice" className="mb-6" />
            <p className="text-center">
              Choose your rice, Kintan Rice or Steamed Rice
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src="fitur3.svg" alt="Choose your meat" className="mb-6" />
            <p className="text-center">Choose your meat</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="fitur4.png" alt="Enjoy your buffet!" className="mb-6" />
            <p className="text-center">Enjoy your buffet!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
