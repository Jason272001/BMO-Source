// eslint-disable-next-line no-unused-vars
import React from "react";
import { Tilt } from "react-tilt";
const Logo = (props) => {
  return (
    <div>
      <Tilt className="Tilt br2 shadow-2 ba b--silver " options={{ max: 90 }}>
        <div className="Tilt-inner pa3">
          <img alt="log" src={props.logo} className={props.className} />
        </div>
      </Tilt>
    </div>
  );
};
export default Logo;
