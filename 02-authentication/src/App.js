import { createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { app } from "./firebase";
import "./App.css";
import Signup from "./pages/Signup";
import SignIn from "./pages/SignIn";

const auth = getAuth(app);

const signupUser = () => {
  createUserWithEmailAndPassword(auth, "raghav@gmail.com", "dev123").then(
    (value) => console.log(value)
  );
};

function App() {
  return (
    <div className="App">
      {/* <h1>Firebase React App</h1>
      <button onClick={signupUser}>Create Your Account</button> */}

      <Signup />

      <SignIn />
    </div>
  );
}

export default App;
