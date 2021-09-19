import { getAuth, onAuthStateChanged } from "@firebase/auth";
import React, { useState, useEffect } from "react";
import "../config/firebase";

const AuthContext = React.createContext();

//Provider =>　コンテキストで渡したい値を指定するもの
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  //認証済みuserを取得して、userに格納する
  //firebase.auth().onAuthStateChange(setUser)でもok
  //useEffectはレンダリングの後に実行する(遅延実行)
  //DOmの操作　=>レンダリングが終わらないとDOMが存在しないので、操作しようがない。
  //外部APIとの通信　=>　レンダリングとは関係ない。
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    //[]は初回のみ。中に変数を入れるとstateが変更あった時に実行される。
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export { AuthProvider,AuthContext };
