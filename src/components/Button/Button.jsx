import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

const Button = (props) => {
  const [localShowDetail, setLocalShowDetail] = useState(false);

  const handleClick = () => {
    setLocalShowDetail(true);
  };

  const handleCloseClick = () => {
    setLocalShowDetail(false);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="px-6 py-1 border-2 border-brightColor text-brightColor hover:bg-brightColor hover:text-white transition-all rounded-full"
      >
        {props.title}
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
              <a className="px-6 py-1 border-2 border-brightColor text-brightColor hover:bg-brightColor hover:text-white transition-all rounded-full">
                Story CA
              </a>

              <a className="px-6 py-1 border-2 border-brightColor text-brightColor hover:bg-brightColor hover:text-white transition-all rounded-full">
                Capital CA
              </a>

              <a className="px-6 py-1 border-2 border-brightColor text-brightColor hover:bg-brightColor hover:text-white transition-all rounded-full">
                Austin Tx
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Button;
