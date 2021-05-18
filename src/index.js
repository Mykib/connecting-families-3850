import "./index.scss";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import About from "./pages/About";
import ActivitiesAustralia from "./pages/ActivitiesAustralia";
import { AuthProvider } from "./auth";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import MyAccount from "./pages/MyAccount";
import MyQueries from "./pages/MyQueries";
import NDIS from "./pages/NDIS";
import NavBar from "./components/NavBar";
import Programs from "./pages/Programs";
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
            <Route path="/programs" component={Programs} />
            <Route path="/about" component={About} />
            <Route path="/MyQueries" component={MyQueries} />
            <Route path="/MyAccount" component={MyAccount} />
            <Route path="/ndis" component={NDIS} />
            <Route path="/contact" component={Contact} />
            <Route path="/activities-australia" component={ActivitiesAustralia} />
          </Switch>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
