import "./ContactDialog.scss";
import "firebase/auth";
import "firebase/database";

import * as yup from "yup";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";

import IconButton from "./IconButton";
import firebase from "firebase/app";
import { useFormik } from "formik";
import { withRouter } from "react-router-dom";

function ContactDialog(props) {
  const title = props.title;
  const [open, setOpen] = useState(true);
  const [helperText, setHelperText] = useState("");
  const [submitSucess, setSubmitSuccess] = useState(false);
  const user = firebase.auth().currentUser;
  const db = firebase.firestore();

  const validationSchema = yup.object({
    name: yup.string().required("Required"),
    email: yup
      .string()
      .email("Please enter valid email")
      .required("This helps us contact you"),
    phone: yup.string(),
    service: yup.string().required("Required"),
    subject: yup.string().required("Subject header empty"),
    messageContent: yup.string().required("Message field empty"),
  });

  const services = ["Contact Supervision", "Report Writing"];

  const initInitialValues = () => {
    if (user) {
      initialName = user.displayName;
      initialEmail = user.email;
      if (user.phoneNumber) initialPhone = user.phoneNumber;
    }
  };

  let initialName = "";
  let initialEmail = "";
  let initialPhone = "";
  initInitialValues();

  const formik = useFormik({
    initialValues: {
      name: initialName,
      email: initialEmail,
      phone: initialPhone,
      subject: "",
      service: "",
      messageContent: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      db.collection("userQueries")
        .add(values)
        .then((res) => {
          //TODO: Add userQuerie.id to firestore.user
          //TODO: Trigger notification to Admins
          setSubmitSuccess(true);
          console.log(res.id);
        })
        .catch((e) => {
          setHelperText(e.message);
          console.log(`Error adding new userQuerie to firebase: `, e.message);
        });
    },
  });

  const handleClickClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClickClose}
        aria-labelledby="form-dialog-title"
      >
        {" "}
        {submitSucess && (
          <>
            <IconButton onClick={handleClickClose} />
            <DialogContent className="dialog-content">
              <DialogTitle>Success!</DialogTitle>
              Your enquiry has been submitted. You will receive an
              email shortly.<br /><br />
              <Button
                variant="contained"
                color="primary"
                onClick={handleClickClose}
              > 
                Close
              </Button>
            </DialogContent>
          </>
        )}
        {!submitSucess && (
          <form onSubmit={formik.handleSubmit}>
            <IconButton onClick={handleClickClose} />
            <DialogTitle>{title}</DialogTitle>
            <DialogContent className="dialog-content">
              <TextField
                autoFocus
                id="name"
                name="name"
                label={user ? "" : "Name"}
                disabled={user}
                type="name"
                autoComplete="off"
                fullWidth
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
              <TextField
                id="email"
                name="email"
                label={user ? "" : "Email Address"}
                type="email"
                autoComplete="off"
                disabled={user}
                fullWidth
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                id="phone"
                name="phone"
                label="Phone Number (optional)"
                type="tel"
                autoComplete="off"
                fullWidth
                value={formik.values.phone}
                onChange={formik.handleChange}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
              />
              <div className="single-row">
                <InputLabel id="service-label" className="select-label">
                  Service:
                </InputLabel>
                <Select
                  labelId="service-label"
                  id="service"
                  name="service"
                  label="Service Type:"
                  value={formik.values.service}
                  fullWidth
                  onChange={formik.handleChange}
                  error={
                    formik.touched.service && Boolean(formik.errors.service)
                  }
                >
                  {services.map((service) => (
                    <MenuItem value={service} key={service}>
                      {service}
                    </MenuItem>
                  ))}
                </Select>
              </div>

              <TextField
                id="subject"
                name="subject"
                label="Subject"
                type="text"
                autoComplete="off"
                variant="filled"
                fullWidth
                value={formik.values.subject}
                onChange={formik.handleChange}
                error={formik.touched.subject && Boolean(formik.errors.subject)}
                helperText={formik.touched.subject && formik.errors.subject}
              />
              <TextField
                autoFocus
                id="messageContent"
                name="messageContent"
                label="Ask us something!"
                type="name"
                autoComplete="off"
                fullWidth
                value={formik.values.messageContent}
                onChange={formik.handleChange}
                error={
                  formik.touched.messageContent &&
                  Boolean(formik.errors.messageContent)
                }
                helperText={
                  formik.touched.messageContent && formik.errors.messageContent
                }
                multiline
                rows={4}
                variant="filled"
              />
            </DialogContent>
            <Button
              variant="text"
              color="default"
              size="small"
              disabled
              fullWidth
              className="error-button"
            >
              {helperText}
            </Button>
            <DialogActions className="neg-margin">
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </DialogActions>
          </form>
        )}
      </Dialog>
    </div>
  );
}

export default withRouter(ContactDialog);
