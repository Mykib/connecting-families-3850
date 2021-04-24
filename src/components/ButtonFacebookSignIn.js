import 'firebase/auth';

import { Button } from "@material-ui/core";
import React from "react";
import facebookIcon from "../assets/Facebook_icon_2013.svg";
import firebase from "firebase/app";
import { withRouter } from "react-router-dom";

function ButtonFacebookSignIn(props) {
  const signIn = () => {
    var provider = new firebase.auth.FacebookAuthProvider();
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
      startIcon={<img className="button-icon" alt="" src={facebookIcon} />}
      fullWidth
    >
      Sign in with Facebook
    </Button>
  );
}

export default withRouter(ButtonFacebookSignIn);
