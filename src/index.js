import "./index.scss";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { AuthProvider } from "./auth";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/core";
import firebase from "./utils/firebase";
import theme from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route path="/programs" component={Home} />
            <Route path="/about" component={Home} />
            <Route path="/ndis" component={Home} />
            <Route path="/contact" component={Home} />
            <Route path="/activities-australia" component={Home} />
          </Switch>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
