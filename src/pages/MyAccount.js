import "firebase/auth";

import React from "react";
import firebase from "firebase/app";
import { useHistory } from "react-router-dom";

function MyAccount(props) {
  const user = firebase.auth().currentUser;
  const history = useHistory();
  const redirectGuest = () => {
    if (!user) history.push("/home");
  };
  redirectGuest();
  return <div></div>;
}

export default MyAccount;
