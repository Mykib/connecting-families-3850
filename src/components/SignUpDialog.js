import React, { useState } from "react";
import "./SignUpDialog.scss";
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

function SignUpDialog(props) {
  const user = userProvider.useUserContext();
  const setUser = userProvider.useUserContextUpdate();
  const open = true;

  const handleClickClose = () => {
    props.setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClickClose}
        aria-labelledby="form-dialog-title"
        // className="dialog-card"
      >
        <IconButton onClick={handleClickClose} />
        <DialogTitle>Sign Up</DialogTitle>
        <DialogContent className="dialog-content">
          <div className="single-row">
            <TextField
              autoFocus
              id="name"
              label="First Name"
              type="name"
              autoComplete="off"
            />
            <TextField
              id="surname"
              label="Surname"
              type="name"
              autoComplete="off"
            />
          </div>
          <TextField
            autoFocus
            id="name"
            label="Email Address"
            type="email"
            autoComplete="off"
            fullWidth
          />
          <TextField
            autoFocus
            id="password"
            label="Password"
            type="password"
            autoComplete="off"
            fullWidth
          />
          <TextField
            autoFocus
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            autoComplete="off"
            fullWidth
          />
          <Button onClick={props.goBack} color="primary" size="small">
            have an account? Login Here
          </Button>
          <ButtonGoogleSignIn />
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
    </div>
  );
}

export default SignUpDialog;
