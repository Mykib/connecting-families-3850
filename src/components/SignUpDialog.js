import "./SignUpDialog.scss";
import 'firebase/auth';

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
import firebase from "firebase/app";
import { useFormik } from "formik";
import { withRouter } from "react-router-dom";

function SignUpDialog(props) {
  const open = true;
  const [helperText, setHelperText] = useState("");

  const validationSchema = yup.object({
    firstName: yup.string().required("Required"),
    surname: yup.string().required("Required"),
    email: yup.string().email("Please enter valid email").required("Required"),
    password: yup
      .string()
      .min(8, ({ min }) => `Must be at least ${min} characters`)
      .required("Required"),
    confirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      surname: "",
      email: "",
      password: "",
      confirmation: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(values.email, values.password)
        .then(() => {
          firebase
            .auth()
            .currentUser.updateProfile({
              displayName: values.firstName + " " + values.surname.charAt(0),
            })
            .then(() => {
              handleClickClose();
              props.history.push("/");
            })
            .catch((e) => {
              console.log(e.message);
            });
        })
        .catch((e) => {
          setHelperText(e.message);
        });
    },
  });

  const handleClickClose = () => {
    props.setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClickClose}
        aria-labelledby="form-dialog-title"
      >
        <form onSubmit={formik.handleSubmit}>
          <IconButton onClick={props.goBack} />
          <DialogTitle>Sign Up</DialogTitle>
          <DialogContent className="dialog-content">
            <div className="single-row">
              <TextField
                autoFocus
                id="firstName"
                name="firstName"
                label="First Name"
                type="name"
                autoComplete="off"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
              <TextField
                id="surname"
                name="surname"
                label="Surname"
                type="name"
                autoComplete="off"
                value={formik.values.surname}
                onChange={formik.handleChange}
                error={formik.touched.surname && Boolean(formik.errors.surname)}
                helperText={formik.touched.surname && formik.errors.surname}
              />
            </div>
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
            <TextField
              id="confirmation"
              name="confirmation"
              label="Confirm Password"
              type="password"
              autoComplete="off"
              fullWidth
              value={formik.values.confirmation}
              onChange={formik.handleChange}
              error={
                formik.touched.confirmation &&
                Boolean(formik.errors.confirmation)
              }
              helperText={
                formik.touched.confirmation && formik.errors.confirmation
              }
            />
            <Button onClick={props.goSignIn} color="primary" size="small">
              have an account? Login Here
            </Button>
            <ButtonGoogleSignIn handleClickClose={handleClickClose} />
            <ButtonFacebookSignIn handleClickClose={handleClickClose} />
          </DialogContent>
          <Button
            variant="text"
            color="error"
            size="small"
            disabled
            fullWidth
            className="error-button"
          >
            {helperText}
          </Button>
          <DialogActions className="neg-margin">
            <Button variant="contained" color="secondary" type="submit">
              Sign Up
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}

export default withRouter(SignUpDialog);
