import "./NavBar.scss";

import { Button } from "@material-ui/core";
import React from "react";
import SignInButton from "./SignInButton";
import aaLogo from "../assets/activities-australia-logo-vector.svg";
import leafIcon from "../assets/connecting-families-wired-logo.svg";

function NavBar(props) {
  const navItems = ["programs", "about", "ndis", "contact"];

  return (
    <div className="nav-bar">
      <div className="ca-home">
        <img src={leafIcon} alt="leaf-logo" className="leaf-logo" />
        <div className="ca-text">
          <h1>Connecting Families</h1>Bringing families together
        </div>
      </div>
      <div className="nav-spacer"></div>
      <div className="nav-items">
        {navItems.map(item => (
            <Button variant="text">{item}</Button>
        ))}
      </div>
      <div className="aa-link">
        <img src={aaLogo} alt="aa-logo" />
      </div>
      <div className="account-button">
        <SignInButton />
      </div>
    </div>
  );
}

export default NavBar;
