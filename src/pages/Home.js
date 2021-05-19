import "./Home.scss";

import React, { useState } from "react";

import ContactButton from "../components/ContactButton";
import RotatingLogo from "../components/RotatingLogo";
import SignInDialog from "../components/SignInDialog";
import SignUpButton from "../components/SignUpButton";
import firebase from "firebase/app";

function Home() {
  const [signInOpen, setSignInOpen] = useState(false);
  const user = firebase.auth().currentUser;
  const setSetSignInOpen = (state) => {
    setSignInOpen(state);
  };
  return (
    <div className="home">
      <div className="home-header" />
      <div className="home-content">
        <RotatingLogo />
        <div className="sign-up-button">
          {!user && <SignUpButton color="primary" />}
          {user && <ContactButton />}
        </div>
        <div className="call-text">or call 02 8036 6121</div>
      </div>
      <SignInDialog open={signInOpen} setOpen={setSetSignInOpen} />
    </div>
  );
}

export default Home;
