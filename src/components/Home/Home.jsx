// eslint-disable-next-line no-unused-vars
import React from "react";
import Button from "../Button/Button";
import bgp from "./bg.png";
const Home = () => {
  return (
    <div
      className="min-h-screen flex flex-row justify-between items-center lg:px-32 px-5  bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bgp})` }}
    >
      <div className="w-full lg:w-2/3 space-y-5">
        <h1 className="text-backgroundColor font-semibold text-4xl pt-14">
          SHARE A DELICIOUS MEAL WITH YOUR FRIENDS!
        </h1>
        <p className="text-backgroundColor font-bold text-xl">
          Since 2018, Banh Mi Oven offers a very different experience, serving
          up delicious Vietnamese Banh Mi in our family-owned restaurants. Our
          goal is always to make high-quality and fresh Vietnamese dishes while
          giving our patrons a customer service experience that is friendly to
          show appreciation to the local community we love.
        </p>
        <div className="lg:pl-44">
          <Button title="Order Now" />
        </div>
      </div>
    </div>
  );
};
export default Home;
