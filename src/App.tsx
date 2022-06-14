import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [word, setWord] = useState("");

  const handleClick = async () => {
    const resp = await fetch("http://localhost:3000/api/test");
    const data = await resp.json();
    setWord(data.test);
  };
  return (
    <div>
      <button onClick={handleClick}>click me</button>
      <h1>{word}</h1>
    </div>
  );
}

export default App;
