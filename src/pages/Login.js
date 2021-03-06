import React, { useContext, useState } from "react";
import { Link,Redirect } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "./AuthService";


const Login = ({history}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        history.push("/");
        console.log("LogIn")
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const user =useContext(AuthContext)
  // //ログインしている場合は、"/"へリダイレクトする
  if(user){
    return <Redirect to="/" />
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">E-mail</label>
          <input type="email" 
          id="email" 
          name="email" 
          placeholder="Email" 
          onChange={(e)=> setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <Link to="/signup">SignUp</Link>
    </>
  );
};

export default Login;
