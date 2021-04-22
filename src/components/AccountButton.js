import { Button, Avatar } from "@material-ui/core";
import "./AccountButton.scss";
import React from "react";
import userPlaceHolder from "../assets/user-solid-fontawesome.svg";
import * as userProvider from "../UserProvider";

function AccountButton(props) {
  const user = userProvider.useUserContext();

  const getProfilePicUrl = () => {
    return user.photoURL;
  };

  function addSizeToGoogleProfilePic(url) {
    if (
      url.indexOf("googleusercontent.com") !== -1 &&
      url.indexOf("?") === -1
    ) {
      return url + "?sz=150";
    }
    return url;
  }

  return (
    <div className="account-button">
      {user != "" && (
        <Button
          variant="text"
          startIcon={
            <div className="account-button-pic-container">
              {user.photoURL === "" && (
                <img
                  className="account-button-pic"
                  src={addSizeToGoogleProfilePic(getProfilePicUrl())}
                />
              )}
              {user.photoURL !== "" && (
                <Avatar className="account-button-pic">
                  {user.displayName.charAt(0)}
                </Avatar>
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
