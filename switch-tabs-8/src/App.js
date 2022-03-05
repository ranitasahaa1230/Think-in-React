import "./styles.css";
import React, { useState } from "react";
import Home from "./components/Home";
import Prof from "./components/Profile";
import About from "./components/About";

export default function App() {
  const [home, setHome] = useState("");

  function clickHandler() {
    setHome(<Home />);
  }
  function clickHandler1() {
    setHome(<About />);
  }
  function clickHandler2() {
    setHome(<Prof />);
  }
  return (
    <div className="App">
      <button onClick={clickHandler}>Home</button>
      <button onClick={clickHandler1}>About</button>
      <button onClick={clickHandler2}>Profile</button>
      <div>{home}</div>
    </div>
  );
}
