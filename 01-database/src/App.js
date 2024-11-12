import { getDatabase, ref, set } from "firebase/database";
import { app } from "./firebase";
import "./App.css";

const db = getDatabase(app);

function App() {
  const putData = () => {
    set(ref(db, "users/raghav"), {
      id: 1,
      name: "Raghav Sethi",
      age: 24,
    });
  };

  return (
    <div container="App">
      <h1>Hello! This is Firebase here.</h1>
      <button onClick={putData} >Put Data</button>
    </div>
  );
}

export default App;
