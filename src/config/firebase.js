import * as firebase from "firebase/app"
import "firebase/auth"

const firebaseConfig={
    apiKey: "AIzaSyCYGVR8U5gF0lUBkCyOq0IA3MufzWlNwYI",
    authDomain: "chat--app-7c83b.firebaseapp.com",
    projectId: "chat--app-7c83b",
    storageBucket: "chat--app-7c83b.appspot.com",
    messagingSenderId: "458813780487",
    appId: "1:458813780487:web:34cb95141f433909f6b0a2"
}

firebase.initializeApp(firebaseConfig)

export default firebase