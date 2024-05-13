// eslint-disable-next-line no-unused-vars
import React from "react";
import { urlFor } from "../../client";
import Button from "../Button/Button";
const Cards = ({ product: { image, name, price } }) => {
  return (
    <div className="w-full lg:w-1/4 p-5 shadow-[rgba(0,_0,_0,_0.7)_2px_3px_8px] rounded-lg">
      <img
        src={urlFor(image && image[0])}
        alt="img"
        style={{ width: "600px" }}
      />
      <div className="space-y-4">
        <h3 className="font-semibold text-center text-sm pt-6 pb-2">{name}</h3>

        <div className="flex flex-row items-center justify-center gap-4">
          <h3 className="font-semibold text-lg">${price}</h3>
          <Button title="Buy Now" />
        </div>
      </div>
    </div>
  );
};

export default Cards;
