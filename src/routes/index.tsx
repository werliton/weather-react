import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import App from "../App";
import Error from "../components/error/Error";

export default function routes() {
  return (
    <Switch>
        <Route path="/" exact component={App} />
        <Route path="*" component={Error} />
    </Switch>
  );
}