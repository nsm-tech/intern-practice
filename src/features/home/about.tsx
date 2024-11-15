const About: React.FC = () => {
  return (
    <section className="container mx-auto px-4 sm:px-8 mt-5">
      <div className="flex flex-col sm:flex-row bg-white shadow-2xl py-8 px-6 sm:px-12 space-y-6 sm:space-y-0 sm:space-x-8">
        <div className="sm:w-2/6 order-1">
          <img
            src="./abouthome.png"
            alt="About us"
            className="hidden sm:block w-full h-auto object-cover rounded-lg"
          />
          <img
            src="./abouthomemb.png"
            alt="About us mobile"
            className="block sm:hidden w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div className="sm:w-4/6 order-2">
          <h2 className="font-bodoni text-4xl sm:text-5xl md:text-7xl text-center sm:text-left">
            About Us
          </h2>
          <p className="text-lg sm:text-2xl font-bold mt-4">
            PREMIUM Japanese BBQ Experience at Exceptional Value
          </p>
          <p className="sm:text-lg md:text-2xl font-thin mt-4 ">
            Yakiniku is one of the most popular cooking styles in Japan. The
            best part of yakiniku is grilling the meat yourself and cooking each
            choice cut of meat just the way you like it. At Kintan Buffet
            (Kintan means golden tongue, 金舌, in Japanese) we offer a premium
            Japanese BBQ experience in a classy environment and at good value.
          </p>
          <p className="sm:text-lg md:text-2xl font-thin mt-4 mb-4">
            In Japan, yakiniku restaurants are judged on meat quality and the
            sauce called “Tare”. At Kintan Buffet, we serve our special homemade
            “Tare” and only specially selected meats and premium beef are used
            for our yakiniku (our meat experts have opened over 1000 meat
            restaurants in Japan, so they know their meats well).
          </p>
          <div className="mt-4 text-center sm:text-left">
            <a
              href="/about"
              className="bg-primary py-2 px-6 rounded-2xl text-lg sm:text-xl md:text-2xl text-white "
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
