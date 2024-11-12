import React, { useState } from "react";
import { getAuth }  from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app)

const SingUp = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then((value) =>
      alert("Success")
    );
  };

  return (
    <div className="signup-page ">
      <label>Email</label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        required
        placeholder="Enter your email here!"
      />
      <label>Password</label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        required
        placeholder="Enter your password here!"
      />
      <button onClick={createUser}>Sign-Up</button>
    </div>
  );
};

export default SingUp;
