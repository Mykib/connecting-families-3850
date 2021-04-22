import React from "react";
import { Button } from "@material-ui/core";
import firebase from "firebase";
import facebookIcon from "../assets/Facebook_icon_2013.svg";

function ButtonFacebookSignIn(props) {
  // SIGN IN HANDLER
  const signIn = () => {
    var provider = new firebase.auth.FacebookAuthProvider();    
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Facebook Access Token.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(user)
      console.log(token)
    });
  };
  
  return (
    <Button
      onClick={signIn}
      variant="outlined"
      startIcon={<img className="button-icon" src={facebookIcon} />}
      fullWidth
    >
      Sign in with Facebook
    </Button>
  );
}

export default ButtonFacebookSignIn;