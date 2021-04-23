import 'firebase/auth';

import { Button } from "@material-ui/core";
import React from "react";
import firebase from "firebase/app";
import googleIcon from "../assets/Google__G__Logo.svg.png";
import { withRouter } from "react-router-dom";

function ButtonGoogleSignIn(props) {
  // SIGN IN HANDLER
  const signIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(() => {
        props.handleClickClose();
        props.history.push("/");
      })
      .catch((error) => {
        var errorMessage = error.message;
        alert(`Signup error: ${errorMessage}`);
      });
  };

  return (
    <Button
      onClick={signIn}
      variant="outlined"
      startIcon={<img className="button-icon" alt="" src={googleIcon} />}
      fullWidth
    >
      Sign in with Google
    </Button>
  );
}

export default withRouter(ButtonGoogleSignIn);
