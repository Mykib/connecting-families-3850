import "firebase/auth";
import "./MyQueries.scss";

import { Paper } from "@material-ui/core";
import React from "react";
import RotatingLogo from "../components/RotatingLogo";
import firebase from "firebase/app";
import { useHistory } from "react-router-dom";

function MyQueries(props) {
  const user = firebase.auth().currentUser;
  const history = useHistory();
  const redirectGuest = () => {
    if (!user) history.push("/home");
  };
  redirectGuest();
  return (
    <div className="MyQueries">
      <RotatingLogo className="background-logo" />
      <div className="blur-background"></div>
      <Paper className="enquiry-content" elevation={3}>
        <br />
        <h1>My Queries</h1>
      </Paper>
    </div>
  );
}

export default MyQueries;
