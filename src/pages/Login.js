import { FirebaseError } from "@firebase/util";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../config/firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    firebase.getAuth().SignIpWithEmailAndPassword(email, password);
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" placeholder="Email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <Link to="/signup">SignUp</Link>
    </>
  );
};

export default Login;
