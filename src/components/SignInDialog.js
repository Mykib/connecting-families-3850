import * as yup from "yup";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";

import ButtonFacebookSignIn from "./ButtonFacebookSignIn";
import ButtonGoogleSignIn from "./ButtonGoogleSignIn";
import IconButton from "./IconButton";
import SignUpDialog from "./SignUpDialog";
import firebase from "firebase/app";
import { useFormik } from "formik";

function SignInDialog(props) {
  const [helperText, setHelperText] = useState("");
  const [signUpOpen, setSignUpOpen] = useState(false);

  const handleOpenSignUp = () => {
    props.setOpen(false);
    setSignUpOpen(true);
  };

  const handleClickClose = () => {
    props.setOpen(false);
  };

  const backFromSignUp = () => {
    setSignUpOpen(false);
    props.setOpen(true);
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
        });
    },
  });

  return (
    <div>
      <Dialog
        open={props.open}
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
            <ButtonGoogleSignIn handleClickClose={handleClickClose} />
            <br />
            <br />
            <ButtonFacebookSignIn handleClickClose={handleClickClose} />
          </DialogContent>
          <Button
            variant="text"
            color="default"
            size="small"
            fullWidth
            disabled
            className="error-button"
          >
            {helperText}
          </Button>
          <DialogActions className="neg-margin">
            <Button variant="contained" color="secondary" type="submit">
              Sign In
            </Button>
          </DialogActions>
        </form>
      </Dialog>
      {signUpOpen && (
        <SignUpDialog setOpen={signUpOpen} goBack={backFromSignUp} goSignIn={backFromSignUp}/>
      )}
    </div>
  );
}

export default SignInDialog;