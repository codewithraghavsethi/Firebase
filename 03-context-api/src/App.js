import { useState } from "react";
import { useFirebase } from "./context/Firebase";
import "./App.css";

function App() {
  const firebase = useFirebase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log("Firebase:", firebase);

  return (
    <div className="App">
      <h1>Firebase</h1>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        placeholder="Enter your email"
      />

      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="Enter your password"
      />
      <button
        onClick={() => {
          firebase.signupUserWithEmailAndPassword(email, password);
          firebase.putData("user/" + "raghavsethi", { email, password });
        }}
      >
        Sign-Up
      </button>
    </div>
  );
}

export default App;
