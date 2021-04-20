import React, { useState } from "react";
import "./AccountButton.css";
import firebase from "firebase";
import { Button } from '@material-ui/core';

function AccountButton(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [pPicUrl, setPPicUrl] = useState("");

  // Initiate Firebase Auth.
  const initFirebaseAuth = () => {
    // Listen to auth state changes.
    firebase.auth().onAuthStateChanged(authStateObserver);
  };

  const signIn = () => {
    // Sign into Firebase using popup auth & Google as the identity provider.
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  };

  const signOut = () => {
    // Sign out of Firebase.
    firebase.auth().signOut();
  };

  // Returns the signed-in user's profile Pic URL.
  const getProfilePicUrl = () => {
    return (
      firebase.auth().currentUser.photoURL || "/images/profile_placeholder.png"
    );
  };

  // Returns the signed-in user's display name.
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
          // Need to request permissions to show notifications.
          requestNotificationsPermissions();
        }
      })
      .catch(function (error) {
        console.error("Unable to get messaging token.", error);
      });
  };

  // Requests permissions to show notifications.
  const requestNotificationsPermissions = () => {
    console.log("Requesting notifications permission...");
    firebase
      .messaging()
      .requestPermission()
      .then(function () {
        // Notification permission granted.
        saveMessagingDeviceToken();
      })
      .catch(function (error) {
        console.error("Unable to get permission to notify.", error);
      });
  };

  // Adds a size to Google Profile pics URLs.
  const addSizeToGoogleProfilePic = (url) => {
    if (
      url.indexOf("googleusercontent.com") !== -1 &&
      url.indexOf("?") === -1
    ) {
      return url + "?sz=150";
    }
    return url;
  };

  // Triggers when the auth state change for instance when the user signs-in or signs-out.
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
      setIsLoggedIn(false)
    }
  };

  initFirebaseAuth();
  console.log(pPicUrl)
  return (
    <div id="user-container">
      {isLoggedIn && (
        <div>
        <Button variant="contained" color="default" id="sign-out" onClick={signOut}>
          Sign-out
        </Button>
          <img id="user-pic" src={pPicUrl} alt=""/>
          <div id="user-name">{userName}</div>
        </div>
      )}
      {!isLoggedIn && (
        <Button variant="contained" color="default" id="sign-in" onClick={signIn}>
          Sign-in with Google
        </Button>
      )}
    </div>
  );
}

export default AccountButton;
