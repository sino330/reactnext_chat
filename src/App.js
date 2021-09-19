import React from "react";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Room from "./pages/Room";

import { AuthProvider } from "./pages/AuthService";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoggedInRoute from "./pages/LoggedInRoute";
//axact(完全一致)でもpath(Switchを外して)は可能
const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <LoggedInRoute exact path="/" component={Room} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/Login" component={Login} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
