const About: React.FC = () => {
  return (
    <section>
      <div className="container mx-auto p-8 bg-white shadow-lg text-center">
        <div className="bg-transparent border-2 p-8 border-secondary ">
          <h2 className="font-bodoni text-7xl">About Us</h2>
          <p className="font-bold text-3xl text-primary mt-8">
            PREMIUM Japanese BBQ Experience at Exceptional Value
          </p>
          <div className="text-2xl  text-start mt-8">
            <p className="font-bold">
              Our thoughts /Philosophy for Kintan Buffet
            </p>
            <p className="font-bold">キンタンビュッフェへの想い</p>
            <p className="font-thin mt-3 w-3/4">
              Yakiniku, a Japanese’ s favorite food is just tasty and fun!With
              our philosophy “All for your smile” , we are bringing this cuisine
              to the world to simply making people happy!We offer a premium
              Japanese BBQ experience in a classy environment and at good value.
            </p>
          </div>
          <div className="text-2xl  text-start mt-8">
            <p className="font-bold">Concept Story / Unique Points</p>
            <p className="font-bold">コンセプト</p>
            <p className="font-thin mt-3 w-3/4">
              All you can eat, quality Japanese BBQWe serve quality meat and
              Japanese food at affordable price. You are spoilt with Japanese
              feast. If you love Wagyu beef, go ahead with Special Wagyu Buffet
              course.
            </p>
            <p className="font-thin mt-8 w-3/4">
              Enjoy with your own wayYakiniku concept is DIY. Choose your
              favorite meat, grill with your own way, and choose your sauces.
              Simply try our homemade sauces or create your own sauce.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
