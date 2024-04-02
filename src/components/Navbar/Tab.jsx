// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-scroll";
const Tab = (props) => {
  return (
    <Link
      to={props.to}
      spy={true}
      smooth={true}
      duration={500}
      className="hover:text-brightColor transition-all cursor-pointer"
    >
      {props.title}
    </Link>
  );
};

export default Tab;
