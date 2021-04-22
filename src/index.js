import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import reportWebVitals from "./utils/reportWebVitals";
import firebase from "./utils/firebase";
import { ThemeProvider } from "@material-ui/core";
import Home from "./pages/Home";
import theme from "./Theme";
import UserProvider from "./UserProvider";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <UserProvider>
        <Home />
      </UserProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
