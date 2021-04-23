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
import ButtonGoogleSignIn from "./ButtonGoogleSignIn";
import ButtonFacebookSignIn from "./ButtonFacebookSignIn";
import SignUpDialog from "./SignUpDialog";
import firebase from "firebase";
import { withRouter } from 'react-router-dom'

function SignInButton(props) {
  const [open, setOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState('');
  const user = firebase.auth().currentUser;

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        props.history.push("/");
      })
      .catch((e) => {
        console.log(e.message);
      });
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
      firebase
        .auth()
        .signInWithEmailAndPassword(values.email, values.password)
        .then(() => {
          handleClickClose();
          props.history.push("/");
        })
        .catch((e) => {
          setHelperText(e.message);
          setError(true);
        });
    },
  });

  return (
    <div id="user-container">
      <div className="icon-button"></div>
      {user === null && (
        <Button
          variant="outlined"
          color="default"
          id="sign-in"
          onClick={handleClickOpen}
        >
          Sign-In
        </Button>
      )}
      {user !== null && (
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
            <ButtonGoogleSignIn handleClickClose={handleClickClose}/>
            <br />
            <br />
            <ButtonFacebookSignIn handleClickClose={handleClickClose}/>
          </DialogContent>
          <Button variant="text" color="error" size="small" fullWidth disabled className="error-button">{helperText}</Button>
          <DialogActions className="neg-margin">
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

export default withRouter(SignInButton);
