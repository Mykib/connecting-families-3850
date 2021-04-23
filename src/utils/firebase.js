import "firebase/firestore";

import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrbNuGAqpLPOOhd_pwgiBVVfFaxR846Ng",
  authDomain: "connecting-families-3850.firebaseapp.com",
  projectId: "connecting-families-3850",
  storageBucket: "connecting-families-3850.appspot.com",
  messagingSenderId: "341454619377",
  appId: "1:341454619377:web:cbb2ffd8e7ae1cb0c2df50",
  measurementId: "G-4ZBEV910RV",
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export default firebase;
