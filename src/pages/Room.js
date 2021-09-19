import { getAuth } from "@firebase/auth";
import React from "react";
import "../config/firebase"

const Room = () => {
  return (
    <>
      <h1>Room</h1>
      <button onClick={()=>getAuth().signOut()}>Logout</button>
    </>
  );
};

export default Room;
