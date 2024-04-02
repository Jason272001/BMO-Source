// eslint-disable-next-line no-unused-vars
import React from "react";
import Button from "../Button/Button";

const LCard = (props) => {
  return (
    <div className="w-full lg:w-1/3  p-5 shadow-[rgba(0,_0,_0,_0.7)_2px_3px_8px] rounded-lg">
      <img src={props.imag} alt="img" />
      <div className="space-y-4">
        <h3 className="font-semibold text-center text-xl ">{props.title}</h3>

        <div className="flex flex-row justify-center ">
          <h2 className="text-lg font-bold">Address: &nbsp;</h2>
          <p>{props.address}</p>
        </div>

        <div className="flex flex-row justify-center ">
          <h2 className="text-lg font-bold">Hour:&nbsp; </h2>
          <p> {props.hour}</p>
        </div>

        <div className="flex flex-row justify-center ">
          <h2 className="text-lg font-bold">{props.ph}:&nbsp; </h2>
          <p>
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href={`tel: +1${props.phone}`}
            >
              {props.phone}
            </a>
          </p>
        </div>

        <div className="flex flex-row items-center justify-center gap-2">
          <Button title="Get Directions" />
        </div>
      </div>
    </div>
  );
};
export default LCard;
