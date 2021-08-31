import React from "react";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Room from "./pages/Room"

import{
    BrowserRouter as Router,
    Switch,
    Route
}from 'react-router-dom'
//axact(完全一致)でもpath(Switchを外して)は可能
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/" component={Room} />
      </Switch>
    </Router>
  );
};

export default App;
