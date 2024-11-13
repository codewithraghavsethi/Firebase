import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth"
import { app } from "../firebase";


const auth = getAuth(app)

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInUser = () =>{
    signInWithEmailAndPassword(auth, email, password).then(value => console.log("Singin Success")).catch(err => console.log(err))
  }

  return (
    <div className="signin-page">
      <h1>Signin Page</h1>
      <label>Email</label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="text"
        required
        placeholder="Enter your email here"
      />

      <label>Password</label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="text"
        required
        placeholder="Enter your password here"
      />
      <button onClick={signInUser}>Sign-In</button>
    </div>
  );
};

export default SignIn;
