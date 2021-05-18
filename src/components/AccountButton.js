import "./AccountButton.scss";
import "firebase/auth";

import { Avatar, Button, Menu, MenuItem } from "@material-ui/core";
import React, { useState } from "react";

import firebase from "firebase/app";
import { useHistory } from "react-router-dom";

function AccountButton(props) {
  const history = useHistory();
  const user = firebase.auth().currentUser;
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true)
  };

  const handleClose = (href) => {
    setAnchorEl(null);
    if (href) history.push(href)
    setOpen(false)
  };

  const getProfilePicUrl = () => {
    return user.photoURL;
  };
  
  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        history.push("/");
      })
      .catch((e) => {
        console.log(e.message);
      });
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
          onClick={handleClick}
          variant="text"
          endIcon={
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
      <Menu
        className="account-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleClose('/MyAccount')}>My Account</MenuItem>
        <MenuItem onClick={() => handleClose('/MyQueries')}>My Queries</MenuItem>
        <MenuItem onClick={signOut}>
          <Button onClick={signOut} variant="outlined">Sign-out</Button>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default AccountButton;
