// eslint-disable-next-line no-unused-vars
import React from "react";
import a1 from "./a1.png";
import a2 from "./a2.png";
import Button from "../Button/Button";
const About = () => {
  return (
    <div>
      <h1 className="text-4xl font-semibold text-center pt-24 pb-10">
        About Us
      </h1>
      <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
        <img src={a1} alt="img" />
        <div className="space-y-4 lg:pt-14 font-bold text-xl">
          <h1 className="font-semibold text-5xl text-center md:text-start ml-5">
            Delicious Vietnamese Banh Mi
          </h1>
          <p className="ml-5">
            Since 2018, Banh Mi Oven offers a very different experience, serving
            up delicious Vietnamese Banh Mi in our family-owned restaurants. Our
            goal is always to make high-quality and fresh Vietnamese dishes
            while giving our patrons a customer service experience that is
            friendly to show appreciation to the local community we love.
          </p>
          <p className="ml-5">
            Your feedback is important to us and we are constantly improving to
            serve you better. We want to grow with you, so please do not
            hesitate to let us know if you have any feedback, questions or
            concerns. Best, Vu and Family.
          </p>
        </div>
      </div>
      <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5 pt-4 pb-4">
        <div className="space-y-4 lg:pt-14 font-bold text-xl">
          <h1 className="font-semibold text-5xl text-center md:text-start">
            Established in 2018.
          </h1>
          <p className="mr-5">
            We are very passionate about Vietnamese culture and cuisine. Which
            is why we are family-owned, to give our beloved customers an
            authentic and warm Vietnamese experience and give back to our local
            community.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Button title="Order Here" />
          </div>
        </div>
        <img src={a2} alt="img" />
      </div>
    </div>
  );
};

export default About;
