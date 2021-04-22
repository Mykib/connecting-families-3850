import { Button, Avatar } from "@material-ui/core";
import "./AccountButton.scss";
import React, { useState } from "react";
import * as userProvider from "../UserProvider";

function AccountButton(props) {
  const user = userProvider.useUserContext();
  const [initial, setInitial] = useState("");

  if (user !== "") {
    if(user.displayName !== undefined) {
      setInitial(user.displayName.toString().charAt(0));
    }
  } else {
    setInitial("");
  }

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
      {user !== "" && (
        <Button
          variant="text"
          startIcon={
            <div className="account-button-pic-container">
              {user.photoURL === "" && (
                <img
                  className="account-button-pic"
                  alt=""
                  src={addSizeToGoogleProfilePic(getProfilePicUrl())}
                />
              )}
              {user !== "" && user.photoURL !== "" && (
                <Avatar className="account-button-pic">{initial}</Avatar>
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
