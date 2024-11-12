import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBDkqSWBtab9-WHGy0od9Ij7KKtGHYPG4o",
    authDomain: "my-app-9aa9d.firebaseapp.com",
    projectId: "my-app-9aa9d",
    storageBucket: "my-app-9aa9d.firebasestorage.app",
    messagingSenderId: "531899880197",
    appId: "1:531899880197:web:49ae41c2f3864f2e559d6c",
    databaseURL: "https://my-app-9aa9d-default-rtdb.firebaseio.com"
  };

  export const app = initializeApp(firebaseConfig);