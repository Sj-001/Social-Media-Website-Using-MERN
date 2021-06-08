import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import history from "./history";
import "./index.css";
import Home from "./components/Home";

render(
  <div>
    <header></header>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  </div>,
  document.getElementById("root")
);
