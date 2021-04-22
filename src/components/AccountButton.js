import React, { useState } from "react";
import "./AccountButton.scss";
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from "@material-ui/core";
import IconButton from "./IconButton";
import ButtonGoogleSignIn from "./ButtonGoogleSignIn";
import ButtonFacebookSignIn from "./ButtonFacebookSignIn";

function AccountButton(props) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div id="user-container">
      <div className="icon-button"></div>
      <Button
        variant="outlined"
        color="default"
        id="sign-out"
        onClick={handleClickOpen}
      >
        Sign-In
      </Button>
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

export default AccountButton;
