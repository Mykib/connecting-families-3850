import "./RotatingLogo.scss";

import { Motion, spring } from "react-motion";
import React, { useEffect, useState } from "react";

import leafBlue from "../assets/cf-leaf-blue.svg";
import leafGreen from "../assets/cf-leaf-green.svg";
import leafOrange from "../assets/cf-leaf-orange.svg";
import leafPurple from "../assets/cf-leaf-purp.svg";

function RotatingLogo(props) {
  const [rotationAngle, setRotationAngle] = useState(45);
  const [stiffness, setStiffness] = useState(30);
  const [damping, setDamping] = useState(10);
  const [looping, setLooping] = useState(true);

  const handleLeafClick = (angle) => {
    if (looping) stopLooping();
    setRotationAngle(angle);
  };

  const stopLooping = () => {
    setLooping(false);
    setStiffness(30);
    setDamping(10);
  };

  return (
    <Motion
      defaultStyle={{ rotate: 0 }}
      style={{
        rotate: spring(rotationAngle, {
          stiffness: stiffness,
          damping: damping,
        }),
      }}
    >
      {(style) => {
        if (looping && Math.round(style.rotate) == 40) {
          setStiffness(0);
          setDamping(0);
        }
        let angle = style.rotate;
        return (
          <div
            className="rotating-logo"
            style={{
              transform: `rotate( ${angle}deg )`,
            }}
          >
            <div className="rl-top">
              <img
                src={leafBlue}
                alt="leaf-blue"
                className="leaf"
                onClick={() => {
                  handleLeafClick(225);
                }}
              />
              <img
                src={leafOrange}
                alt="leaf-orange"
                className="leaf"
                onClick={() => {
                  handleLeafClick(135);
                }}
              />
            </div>
            <div className="rl-bot">
              <img
                src={leafGreen}
                alt="leaf-green"
                className="leaf"
                onClick={() => {
                  handleLeafClick(315);
                }}
              />
              <img
                src={leafPurple}
                alt="leaf-purple"
                className="leaf"
                onClick={() => {
                  handleLeafClick(45);
                }}
              />
            </div>
          </div>
        );
      }}
    </Motion>
  );
}

export default RotatingLogo;
