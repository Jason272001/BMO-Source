// eslint-disable-next-line no-unused-vars
import React from "react";
import Cards from "../Cards/Cards";

const Menu = (props) => {
  const products = props.products;
  return (
    <div className="min-h-screen flex flex-col justify-center itmes-center lg:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center pt-24 pb-10">
        {props.title}
      </h1>
      <div className="flex flex-wrap gap-8 justify-center">
        {products?.map((product) => (
          <Cards key={product._id} product={product} links={product.link} />
        ))}
      </div>
    </div>
  );
};
export default Menu;
