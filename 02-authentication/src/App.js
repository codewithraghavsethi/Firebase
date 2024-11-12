import { createUserWithEmailAndPassword } from "firebase/auth"
import { getAuth } from "firebase/auth";
import { app } from "./firebase"
import './App.css';
import SingUp from "./pages/SingUp";

const auth = getAuth(app)

const signupUser = ()=>{
createUserWithEmailAndPassword(auth, "raghav@gmail.com", "dev123").then((value) => console.log(value))
}

function App() {
  return (
    <div className="App">
      {/* <h1>Firebase React App</h1>
      <button onClick={signupUser}>Create Your Account</button> */}

      <SingUp />
    </div>
  );
}

export default App;
