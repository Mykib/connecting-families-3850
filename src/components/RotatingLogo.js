import "./RotatingLogo.scss";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import { Motion, spring } from "react-motion";
import React, { useState } from "react";

import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
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
    <div className="RotatingLogo">
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
      {currentCard !== "" && <ArrowDropUpIcon className="down-arrow" />}
      {currentCard === "programs" && (
        <Card className="info-card">
          <CardContent>
            <Typography variant="h5" component="h2">
              PROGRAMS
            </Typography>
            <Typography variant="body2" component="p">
              We offer a variety of programs to meet the needs of all of our
              clients. The below provides an outline of the services we offer.
              Our friendly staff are able to provide further information and
              answer any questions you may have.
            </Typography>
          </CardContent>
          <Button size="small" variant="contained">
            Click here to learn more!
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
              Our company philosophy is based on the belief that children and
              their needs are of the utmost importance. Our entire team is
              committed to meeting the needs of all the families we work with.
              We aim to provide a safe, secure and sensitive environment for
              children to have contact with their family members.
            </Typography>
          </CardContent>
          <Button size="small" variant="contained">
            Learn about our services!
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
              Connecting Families is a community services organisation committed
              to meeting the needs of our clients and their families by offering
              numerious services as a registered NDIS provider.
            </Typography>
          </CardContent>
          <Button size="small" variant="contained">
            Learn about our services!
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
              At Activities Australia we create a positive and fun environment
              that encourages individual learning and growth for all young
              people by offering school holiday camps for all school age
              children. Through mentoring and coaching by our awesome team of
              motivated coaches, we guide young people through a range of
              sporting, creative arts and life skill exercises that will see
              them leave our camps fitter, stronger, happier and more confident.
            </Typography>
          </CardContent>
          <Button size="small" variant="contained">
            See Activities Australia!
          </Button>
        </Card>
      )}
    </div>
  );
}

export default RotatingLogo;
