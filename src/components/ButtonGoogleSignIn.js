import React, { useState } from "react";
import { Button } from "@material-ui/core";
import firebase from "firebase";
import googleIcon from "../assets/Google__G__Logo.svg.png";

function ButtonGoogleSignIn(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [pPicUrl, setPPicUrl] = useState("");

  // INITIATE FIREBASE AUTH
  const initFirebaseAuth = () => {
    // Listen to auth state changes.
    firebase.auth().onAuthStateChanged(authStateObserver);
  };

  // SIGN IN HANDLER
  const signIn = () => {
    // Sign into Firebase using popup auth & Google as the identity provider.
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  };

  // GET USER PROFILE PICTURE
  const getProfilePicUrl = () => {
    return (
      firebase.auth().currentUser.photoURL || "/images/profile_placeholder.png"
    );
  };

  // GET USER NAME
  const getUserName = () => {
    return firebase.auth().currentUser.displayName;
  };

  // Saves the messaging device token to the datastore.
  const saveMessagingDeviceToken = () => {
    firebase
      .messaging()
      .getToken()
      .then(function (currentToken) {
        if (currentToken) {
          console.log("Got FCM device token:", currentToken);
          // Saving the Device Token to the datastore.
          firebase
            .firestore()
            .collection("fcmTokens")
            .doc(currentToken)
            .set({ uid: firebase.auth().currentUser.uid });
        } else {
        }
      })
      .catch(function (error) {
        console.error("Unable to get messaging token.", error);
      });
  };

  // ADD IMAGE SIZE TO PROFILE PICTURE URL
  const addSizeToGoogleProfilePic = (url) => {
    if (
      url.indexOf("googleusercontent.com") !== -1 &&
      url.indexOf("?") === -1
    ) {
      return url + "?sz=150";
    }
    return url;
  };

  // SIGNED IN STATE OBSERVER
  const authStateObserver = (user) => {
    if (user) {
      // User is signed in!
      // Get the signed-in user's profile pic and name.
      setPPicUrl(addSizeToGoogleProfilePic(getProfilePicUrl()));
      setUserName(getUserName());
      setIsLoggedIn(true);

      // We save the Firebase Messaging Device token and enable notifications.
      saveMessagingDeviceToken();
    } else {
      // User is signed out!
      setIsLoggedIn(false);
    }
  };

  initFirebaseAuth();
  return (
    <Button
      onClick={null}
      variant="outlined"
      startIcon={<img className="button-icon" src={googleIcon} />}
      fullWidth
    >
      Sign in with Google
    </Button>
  );
}

export default ButtonGoogleSignIn;
