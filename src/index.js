import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import "./index.scss";
import reportWebVitals from "./utils/reportWebVitals";
import firebase from "./utils/firebase";
import { ThemeProvider } from "@material-ui/core";
import Home from "./pages/Home";
import theme from "./theme";
import { AuthProvider } from "./auth";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
