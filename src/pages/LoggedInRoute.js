import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthService";

const LoggedInRoute = ({ component: Component, ...rest }) => {
  const user = useContext(AuthContext);

  return (
    <Route
      {...rest}
      component={
        //loginしていればconponentを描写
        //loginしていなければ"/login"にリダイレクト
        (routeProps) =>
          user ? <Component {...routeProps} /> : <Redirect to="/Login" />
      }
    />
  );
};

export default LoggedInRoute;
