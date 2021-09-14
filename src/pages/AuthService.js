import { getAuth,onAuthStateChanged } from "@firebase/auth";
import React,{useState} from "react"
import "../config/firebase";

const AuthContext=React.createContext()

//Provider =>　コンテキストで渡したい値を指定するもの
const AuthProvider=({children})=>{
    const [user,setUser]=useState(null)
    const auth=getAuth();
    //認証済みuserを取得して、userに格納する
    //firebase.auth().onAuthStateChange(setUser)でもok
    onAuthStateChanged(auth,(user)=>{
        setUser(user)
    })

        return(
            <AuthContext.Provider value={user}>
                {children}
            </AuthContext.Provider>
        )
} 

export {
    AuthProvider
}