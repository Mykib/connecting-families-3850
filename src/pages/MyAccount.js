import "firebase/auth";
import "./MyAccount.scss";

import * as yup from "yup";

import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  Paper,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";

import RotatingLogo from "../components/RotatingLogo";
import firebase from "firebase/app";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";

function MyAccount(props) {
  const user = firebase.auth().currentUser;
  const history = useHistory();
  const [open, setOpen] = useState(true)
  const [helperText, setHelperText] = useState("");

  const redirectGuest = () => {
    if (!user) history.push("/home");
  };
  redirectGuest();

  const handleOnClose = () => {
    setOpen(false)
    history.goBack()
  }

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
      firstName: user?user.displayName.split(/[ ,]+/)[0]:'',
      surname: user?user.displayName.split(/[ ,]+/)[1]:'',
      email: user?user.email:''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(values.email, values.password)
        .then(() => {
          // TODO: Update account
        })
        .catch((e) => {
          setHelperText(e.message);
        });
    },
  });

  return (
    <div className="MyAccount">
      <RotatingLogo className="background-logo" />
      <div className="blur-background"></div>
      <Dialog
        className="account-content"
        open={open}
        onClose={handleOnClose}
        aria-labelledby="form-dialog-title"
      >
        <form onSubmit={formik.handleSubmit}>
          <DialogTitle>My Account</DialogTitle>
          {user &&           <div className="">
            {user.photoURL && (
              <img className="account-pic" alt="" src={user.photoURL} />
            )}
            {user !== null && !user.photoURL && (
              <Avatar className="account-pic"></Avatar>
            )}
          </div>}

          <div className="single-row">
            <TextField
              autoFocus
              id="firstName"
              name="firstName"
              label="First Name"
              type="name"
              disabled
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
              disabled
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
            disabled
            autoComplete="off"
            fullWidth
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
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
          <Button variant="contained" color="primary" type="submit">
            Update
          </Button>
        </form>
      </Dialog>
    </div>
  );
}

export default MyAccount;
