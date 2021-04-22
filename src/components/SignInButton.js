import React, { useState } from "react";
import "./SignInButton.scss";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import IconButton from "./IconButton";
import firebase from "firebase";
import ButtonGoogleSignIn from "./ButtonGoogleSignIn";
import ButtonFacebookSignIn from "./ButtonFacebookSignIn";
import * as userProvider from "../UserProvider";

function SignInButton(props) {
  const [open, setOpen] = useState(false);
  const user = userProvider.useUserContext();
  const setUser = userProvider.useUserContextUpdate();

  // INITIATE FIREBASE AUTH
  const initFirebaseAuth = () => {
    firebase.auth().onAuthStateChanged(authStateObserver);
  };

  // SIGNED IN STATE OBSERVER
  const authStateObserver = (user) => {
    if (user) {
      handleClose();
      setUser(firebase.auth().currentUser);
    } else {
    }
  };

  const signOut = () => {
    firebase.auth().signOut();
    setUser([])
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  initFirebaseAuth();
  return (
    <div id="user-container">
      <div className="icon-button"></div>
      {user == "" && (
        <Button
          variant="outlined"
          color="default"
          id="sign-in"
          onClick={handleClickOpen}
        >
          Sign-In
        </Button>
      )}
      {user != "" && (
        <Button
          variant="outlined"
          color="default"
          id="sign-in"
          onClick={signOut}
        >
          Sign-Out
        </Button>
      )}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        className="dialog-card"
      >
        <IconButton onClick={handleClose} />
        <DialogTitle id="form-dialog-title">
          <center>Sign In</center>
        </DialogTitle>
        <DialogContent className="dialog-content">
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            autoComplete="off"
            fullWidth
          />
          <TextField
            margin="dense"
            id="password"
            label="Password"
            type="password"
            autoComplete="off"
            fullWidth
          />
          <Button onClick={handleClose} color="primary" size="small">
            Need an account? Click Here
          </Button>
          <br />
          <br />
          <ButtonGoogleSignIn />
          <br />
          <br />
          <ButtonFacebookSignIn />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="primary">
            Sign In
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default SignInButton;
