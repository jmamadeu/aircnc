import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import New from "./pages/New";

function Routes() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/new' component={New} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Routes;
