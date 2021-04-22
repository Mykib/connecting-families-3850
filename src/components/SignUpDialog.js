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
import { useFormik } from "formik";
import * as yup from "yup";
import firebase from "firebase";
import ButtonGoogleSignIn from "./ButtonGoogleSignIn";
import ButtonFacebookSignIn from "./ButtonFacebookSignIn";
import * as userProvider from "../UserProvider";

function SignUpDialog(props) {
  const user = userProvider.useUserContext();
  const setUser = userProvider.useUserContextUpdate();
  const open = true;

  const validationSchema = yup.object({
    firstName: yup.string().required("Required"),
    surname: yup.string().required("Required"),
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Required"),
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
      alert(JSON.stringify(values, null, 2));
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
        // className="dialog-card"
      >
        <form onSubmit={formik.handleSubmit}>
          <IconButton onClick={handleClickClose} />
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
                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
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
              error={formik.touched.confirmation && Boolean(formik.errors.confirmation)}
              helperText={formik.touched.confirmation && formik.errors.confirmation}
            />
            <Button onClick={props.goBack} color="primary" size="small">
              have an account? Login Here
            </Button>
            <ButtonGoogleSignIn />
            <ButtonFacebookSignIn />
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              color="primary"
              type="submit"
            >
              Sign Up
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}

export default SignUpDialog;
