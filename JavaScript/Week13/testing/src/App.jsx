import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Skills from "./components/Skills/Skills";
import Counter from "./components/Counter/Counter";
function App() {
  const [count, setCount] = useState(0);
  const skills = ["CSS", "HTML", "JS"];

  return (
    <>
      <Counter />
    </>
  );
}

export default App;
