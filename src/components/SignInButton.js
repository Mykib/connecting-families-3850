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
import { useFormik } from "formik";
import * as yup from "yup";
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
    setOpen(false);
    setSignUpOpen(true);
  };

  const backFromSignUp = () => {
    setSignUpOpen(false);
    setOpen(true);
  };

  const validationSchema = yup.object({
    email: yup.string().email("Please enter valid email").required("Required"),
    password: yup
      .string()
      .min(8, ({ min }) => `Must be at least ${min} characters`)
      .required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

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
        <form onSubmit={formik.handleSubmit}>
          <IconButton onClick={handleClickClose} />
          <DialogTitle>Sign In</DialogTitle>
          <DialogContent className="dialog-content">
            <TextField
              id="email"
              name="email"
              label="Email Address"
              type="email"
              autoComplete="off"
              fullWidth
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              id="password"
              name="password"
              label="Password"
              type="password"
              autoComplete="off"
              fullWidth
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
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
            <Button variant="contained" color="primary" type="submit">
              Sign In
            </Button>
          </DialogActions>
        </form>
      </Dialog>
      {signUpOpen && (
        <SignUpDialog setOpen={setSignUpOpen} goBack={backFromSignUp} />
      )}
    </div>
  );
}

export default SignInButton;
