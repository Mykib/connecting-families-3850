import "./RotatingLogo.scss";

import React from "react";
import leafBlue from "../assets/cf-leaf-blue.svg";
import leafGreen from "../assets/cf-leaf-green.svg";
import leafOrange from "../assets/cf-leaf-orange.svg";
import leafPurple from "../assets/cf-leaf-purp.svg";

function RotatingLogo(props) {
  return (
    <div className="rotating-logo">
      <div className="rl-top">
        <img src={leafBlue} alt="leaf-blue" className="leaf" />
        <img src={leafOrange} alt="leaf-orange" className="leaf" />
      </div>
      <div className="rl-bot">
        <img src={leafGreen} alt="leaf-green" className="leaf" />
        <img src={leafPurple} alt="leaf-purple" className="leaf" />
      </div>
    </div>
  );
}

export default RotatingLogo;
