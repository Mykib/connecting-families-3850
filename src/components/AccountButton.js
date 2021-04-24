import "./AccountButton.scss";
import 'firebase/auth';

import { Avatar, Button } from "@material-ui/core";

import React from "react";
import firebase from "firebase/app";

function AccountButton(props) {
  const user = firebase.auth().currentUser;

  const getProfilePicUrl = () => {
    return user.photoURL;
  };

  function addSizeToGoogleProfilePic(url) {
    if (url) {
      if (
        url.indexOf("googleusercontent.com") !== -1 &&
        url.indexOf("?") === -1
      ) {
        return url + "?sz=150";
      }
      return url;
    }
    return url;
  }

  return (
    <div className="account-button">
      {user !== null && (
        <Button
          variant="text"
          startIcon={
            <div className="account-button-pic-container">
              {user.photoURL && (
                <img
                  className="account-button-pic"
                  alt=""
                  src={addSizeToGoogleProfilePic(getProfilePicUrl())}
                />
              )}
              {user !== null && !user.photoURL && (
                <Avatar className="account-button-pic"></Avatar>
              )}
            </div>
          }
        >
          <div className="account-button-text">{user.displayName}</div>
        </Button>
      )}
    </div>
  );
}

export default AccountButton;
