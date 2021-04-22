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
import SignUpDialog from "./SignUpDialog";

function SignInButton(props) {
  const [open, setOpen] = useState(false);
  const user = userProvider.useUserContext();
  const setUser = userProvider.useUserContextUpdate();
  const [signUpOpen, setSignUpOpen] = useState(false);

  // INITIATE FIREBASE AUTH
  const initFirebaseAuth = () => {
    firebase.auth().onAuthStateChanged(authStateObserver);
  };

  // SIGNED IN STATE OBSERVER
  const authStateObserver = (user) => {
    if (user) {
      handleClickClose();
      setUser(firebase.auth().currentUser);
    } else {
    }
  };

  const signOut = () => {
    firebase.auth().signOut();
    setUser([]);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  const handleOpenSignUp = () => {
    setOpen(false)
    setSignUpOpen(true)
  }

  const backFromSignUp = () => {
    setSignUpOpen(false)
    setOpen(true)
  }

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
        onClose={handleClickClose}
        aria-labelledby="form-dialog-title"
      >
        <IconButton onClick={handleClickClose} />
        <DialogTitle>Sign In</DialogTitle>
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
          <Button onClick={handleOpenSignUp} color="primary" size="small">
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
          <Button
            onClick={handleClickClose}
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        </DialogActions>
      </Dialog>
      {signUpOpen && 
      <SignUpDialog setOpen={setSignUpOpen} goBack={backFromSignUp}/>}
    </div>
  );
}

export default SignInButton;
