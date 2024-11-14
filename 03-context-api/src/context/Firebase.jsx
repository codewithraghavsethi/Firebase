import { createContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyBDkqSWBtab9-WHGy0od9Ij7KKtGHYPG4o",
    authDomain: "my-app-9aa9d.firebaseapp.com",
    databaseURL: "https://my-app-9aa9d-default-rtdb.firebaseio.com",
    projectId: "my-app-9aa9d",
    storageBucket: "my-app-9aa9d.firebasestorage.app",
    messagingSenderId: "531899880197",
    appId: "1:531899880197:web:873e8191bdc11022559d6c"
  };

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);

const FirebaseContext = createContext(null);

export const FirebaseProvider = (props) => {
  const signupUserWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };

const putData = (key, data) =>{

}

  return (
    <FirebaseContext.Provider value={{signupUserWithEmailAndPassword}}>
      {props.children}
    </FirebaseContext.Provider>
  );
};
