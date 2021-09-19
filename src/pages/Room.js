import { getAuth } from "@firebase/auth";
import React, { useContext } from "react";
import { useEffect, useState } from "react/cjs/react.development";
import "../config/firebase";
import { collection, onSnapshot,addDoc } from "@firebase/firestore";
import { db } from "../config/firebase";
import { AuthContext } from "./AuthService";

const Room = () => {
  const [messages, setMessages] = useState([]);
  const [value, setVlaue] = useState("");
  const user =useContext(AuthContext)

  const handleSubmit=(e)=>{
    e.preventDefault()
    addDoc(collection(db,"message"),{content:value,user:user.displayName})
  }

  useEffect(() => {
    onSnapshot(collection(db, "message"), (snapShot) => {
      const messages = snapShot.docs.map((doc) => {
        return doc.data();
      });
      setMessages(messages);
    });
  }, []);
  console.log(messages);
  return (
    <>
      <h1>Room</h1>
      <ul>
          {messages.map((message) => (
            <li>{message.user}:{message.content}</li>
          ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setVlaue(e.target.value)}
        />
        <button type="submit">送信</button>
      </form>
      <button onClick={() => getAuth().signOut()}>Logout</button>
    </>
  );
};

export default Room;
