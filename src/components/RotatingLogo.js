import "./RotatingLogo.scss";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
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
  const [currentCard, setCurrentCard] = useState("");

  const handleLeafClick = (card, angle) => {
    if (looping) stopLooping();
    setCurrentCard(card);
    setRotationAngle(angle);
  };

  const stopLooping = () => {
    setLooping(false);
    setStiffness(30);
    setDamping(10);
  };

  return (
    <div>
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
                    handleLeafClick("about", 225);
                  }}
                />
                <img
                  src={leafOrange}
                  alt="leaf-orange"
                  className="leaf"
                  onClick={() => {
                    handleLeafClick("programs", 135);
                  }}
                />
              </div>
              <div className="rl-bot">
                <img
                  src={leafGreen}
                  alt="leaf-green"
                  className="leaf"
                  onClick={() => {
                    handleLeafClick("ndis", 315);
                  }}
                />
                <img
                  src={leafPurple}
                  alt="leaf-purple"
                  className="leaf"
                  onClick={() => {
                    handleLeafClick("activities", 45);
                  }}
                />
              </div>
            </div>
          );
        }}
      </Motion>
      <br />
      {currentCard === "programs" && (
        <Card className="info-card">
          <CardContent>
            <Typography variant="h5" component="h2">
              PROGRAMS
            </Typography>
            <Typography variant="body2" component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget
              sit amet tellus cras adipiscing enim eu. Sagittis aliquam
              malesuada bibendum arcu vitae. Sit amet risus nullam eget felis
              eget nunc lobortis.
            </Typography>
          </CardContent>
          <Button size="small" variant="contained">
            Learn More
          </Button>
        </Card>
      )}
      {currentCard === "about" && (
        <Card className="info-card">
          <CardContent>
            <Typography variant="h5" component="h2">
              ABOUT US
            </Typography>
            <Typography variant="body2" component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget
              sit amet tellus cras adipiscing enim eu. Sagittis aliquam
              malesuada bibendum arcu vitae. Sit amet risus nullam eget felis
              eget nunc lobortis.
            </Typography>
          </CardContent>
          <Button size="small" variant="contained">
            Learn More
          </Button>
        </Card>
      )}
      {currentCard === "ndis" && (
        <Card className="info-card">
          <CardContent>
            <Typography variant="h5" component="h2">
              NDIS
            </Typography>
            <Typography variant="body2" component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget
              sit amet tellus cras adipiscing enim eu. Sagittis aliquam
              malesuada bibendum arcu vitae. Sit amet risus nullam eget felis
              eget nunc lobortis.
            </Typography>
          </CardContent>
          <Button size="small" variant="contained">
            Learn More
          </Button>
        </Card>
      )}
      {currentCard === "activities" && (
        <Card className="info-card">
          <CardContent>
            <Typography variant="h5" component="h2">
              ACTIVITIES AUSTRALIA
            </Typography>
            <Typography variant="body2" component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget
              sit amet tellus cras adipiscing enim eu. Sagittis aliquam
              malesuada bibendum arcu vitae. Sit amet risus nullam eget felis
              eget nunc lobortis.
            </Typography>
          </CardContent>
          <Button size="small" variant="contained">
            Learn More
          </Button>
        </Card>
      )}
    </div>
  );
}

export default RotatingLogo;
