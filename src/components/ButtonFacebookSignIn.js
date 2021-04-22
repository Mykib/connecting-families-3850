import React from "react";
import { Button } from "@material-ui/core";
import facebookIcon from "../assets/Facebook_icon_2013.svg";

function ButtonFacebookSignIn(props) {
  return (
    <Button
      onClick={null}
      variant="outlined"
      startIcon={<img className="button-icon" src={facebookIcon} />}
      fullWidth
    >
      Sign in with Facebook
    </Button>
  );
}

export default ButtonFacebookSignIn;
