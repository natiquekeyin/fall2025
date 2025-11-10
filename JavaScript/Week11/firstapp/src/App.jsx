import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <main>
        <h1 style={{ color: "blue" }}>Keyin College!</h1>
      </main>
      <Contact />

      <Footer />
    </>
  );
}

export default App;
