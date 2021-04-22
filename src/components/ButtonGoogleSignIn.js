import React, { useState } from "react";
import { Button } from "@material-ui/core";
import firebase from "firebase";
import googleIcon from "../assets/Google__G__Logo.svg.png";

function ButtonGoogleSignIn(props) {
  // SIGN IN HANDLER
  const signIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  };

  return (
    <Button
      onClick={signIn}
      variant="outlined"
      startIcon={<img className="button-icon" src={googleIcon} />}
      fullWidth
    >
      Sign in with Google
    </Button>
  );
}

export default ButtonGoogleSignIn;
