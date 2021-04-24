import "./NavBar.scss";

import React, { useEffect, useState } from "react";

import { Button } from "@material-ui/core";
import { Squash as Hamburger } from "hamburger-react";
import SignInButton from "./SignInButton";
import aaLogo from "../assets/activities-australia-logo-vector.svg";
import leafIcon from "../assets/connecting-families-wired-logo.svg";

function NavBar(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navItems, setNavItems] = useState([
    "programs",
    "about",
    "ndis",
    "contact",
  ]);

  const handleClose = () => {
    if (menuOpen) setMenuOpen(false)
  }

  useEffect(() => {
    menuOpen
      ? setNavItems(["home", "programs", "about", "ndis", "contact"])
      : setNavItems(["programs", "about", "ndis", "contact"]);
  }, [menuOpen]);

  return (
    <div className="nav-bar">
      <div className="nav-mobile">
        <div className="hamburger">
          <Hamburger toggled={menuOpen} toggle={setMenuOpen} size={20} />
        </div>
        <img src={leafIcon} alt="leaf-logo" className="leaf-logo" />
        <div className="ca-text">
          <h1>Connecting Families</h1>Bringing families together
        </div>
      </div>
      <div className={`nav-content ${menuOpen ? "not-hidden" : "hidden"}`} onClick={handleClose}>
        <div className="ca-home">
          <img src={leafIcon} alt="leaf-logo" className="leaf-logo" />
          <div className="ca-text">
            <h1>Connecting Families</h1>Bringing families together
          </div>
        </div>
        <div className="nav-spacer"></div>
        <div className="nav-items">
          {navItems.map((item) => (
            <Button variant="text" className="nav-button">
              {item}
            </Button>
          ))}
        </div>
        <div className="aa-link">
          <img src={aaLogo} alt="aa-logo" />
        </div>
        <div className="account-button">
          <SignInButton />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
