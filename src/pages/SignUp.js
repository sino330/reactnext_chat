import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../config/firebase";
import { createUserWithEmailAndPassword, getAuth,updateProfile } from "@firebase/auth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const [name,setName]=useState("")

  const auth = getAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then(({user})=>{
      updateProfile(auth.currentUser,{
        displayName: name
      })
    })
    .catch((err) => {
      console.log(err);
    });
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Name</label>
          <input
            name="name"
            type="name"
            id="name"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            name="email"
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
