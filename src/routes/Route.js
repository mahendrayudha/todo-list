import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Home from "../pages/main/Home";

export default function Route() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/register" component={Register} />

      <Route path="/home" component={Home} isPrivate />

      <Route component={Login} />
    </Switch>
  );
}
