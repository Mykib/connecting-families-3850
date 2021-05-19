import "./SignInButton.scss";
import "firebase/auth";

import React, { useEffect, useState } from "react";

import AccountButton from "./AccountButton";
import { Button } from "@material-ui/core";
import SignInDialog from "./SignInDialog";
import SignUpDialog from "./SignUpDialog";
import firebase from "firebase/app";
import { withRouter } from "react-router-dom";

function SignInButton(props) {
  const [signInOpen, setSignInOpen] = useState(false);
  let user = firebase.auth().currentUser;

  const openSignInDialog = () => {
    setSignInOpen(true);
  };

  const setSetSignInOpen = (state) => {
    setSignInOpen(state);
  };

  useEffect(() => {
    user = firebase.auth().currentUser;
  }, [])

  return (
    <div id="user-container">
      <div className="icon-button"></div>
      {user === null && (
        <Button
          variant="outlined"
          color="default"
          id="sign-in"
          onClick={openSignInDialog}
        >
          Sign-In
        </Button>
      )}
      {user && <AccountButton />}
      {!user && <SignInDialog open={signInOpen} setOpen={setSetSignInOpen}/>}
    </div>
  );
}

export default withRouter(SignInButton);
