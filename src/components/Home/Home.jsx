// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import bgp from "./bg.png";
const Home = () => {
  const [localShowDetail, setLocalShowDetail] = useState(false);

  const handleClick = () => {
    setLocalShowDetail(true);
  };

  const handleCloseClick = () => {
    setLocalShowDetail(false);
  };
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
          <button
            onClick={handleClick}
            className="px-6 py-1 border-2 border-brightColor text-brightColor hover:bg-brightColor hover:text-white transition-all rounded-full"
          >
            Order Now
          </button>

          {localShowDetail && (
            <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 transition duration-1000 ease-in-out">
              <div className="h-4/6 w-96 mx-auto bg-blue-100 rounded-lg shadow-lg p-10 relative">
                <button
                  type="button"
                  onClick={handleCloseClick}
                  className="flex items-center text-2xl font-semibold text-red-500 cursor-pointer gap-2 border-none -mt-15 bg-transparent"
                >
                  <FaArrowLeft />
                </button>
                <div className="flex flex-col justify-center items-center space-y-9 mt-10">
                  <a
                    href="https://story.orderbanhmioven.com/"
                    className="px-6 py-1 border-2 border-brightColor text-brightColor hover:bg-brightColor hover:text-white transition-all rounded-full"
                  >
                    Story CA
                  </a>

                  <a
                    href="https://capitol.orderbanhmioven.com/"
                    className="px-6 py-1 border-2 border-brightColor text-brightColor hover:bg-brightColor hover:text-white transition-all rounded-full"
                  >
                    Capital CA
                  </a>

                  <a
                    href="https://austin.orderbanhmioven.com/"
                    className="px-6 py-1 border-2 border-brightColor text-brightColor hover:bg-brightColor hover:text-white transition-all rounded-full"
                  >
                    Austin Tx
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Home;
