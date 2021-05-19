import "./SignInButton.scss";
import "firebase/auth";

import React, { useEffect, useState } from "react";

import AccountButton from "./AccountButton";
import { Button } from "@material-ui/core";
import SignInDialog from "./SignInDialog";
import firebase from "firebase/app";
import { withRouter } from "react-router-dom";

function SignInButton(props) {
  const [signInOpen, setSignInOpen] = useState(false);
  const [user, setUser] = useState(() => {
    const user = firebase.auth().currentUser;
    return user;
  });
  useEffect(() => {
    firebase.auth().onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
    });
  }, []);

  const openSignInDialog = () => {
    setSignInOpen(true);
  };

  const setSetSignInOpen = (state) => {
    setSignInOpen(state);
  };

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
