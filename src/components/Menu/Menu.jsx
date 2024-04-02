// eslint-disable-next-line no-unused-vars
import React from "react";
import Cards from "../Cards/Cards";
import p1 from "./p1.jpeg";
const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center itmes-center lg:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center pt-24 pb-10">
        Our Menu
      </h1>
      <div className="flex flex-wrap gap-8 justify-center">
        <Cards img={p1} title="Cold Cut Specials Combo" price="$10.00" />
        <Cards img={p1} title="Cold Cut Specials Combo" price="$10.00" />
        <Cards img={p1} title="Cold Cut Specials Combo" price="$10.00" />
        <Cards img={p1} title="Cold Cut Specials Combo" price="$10.00" />
        <Cards img={p1} title="Cold Cut Specials Combo" price="$10.00" />
        <Cards img={p1} title="Cold Cut Specials Combo" price="$10.00" />
      </div>
    </div>
  );
};
export default Menu;
