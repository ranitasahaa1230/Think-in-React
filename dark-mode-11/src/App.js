import "./styles.css";
import React, { useState } from "react";
import Toggle from "./Toggle";

export default function App() {
  const [show, setDisplay] = useState(false);
  // const [mode,setMode]=useState("black")
  // const [colour,setColor]=useState("white")

  // function changeMode(){
  //   if(mode==="black" && colour==="white"){
  //     setMode("red");
  //     setColor("yellow")
  //   }else{
  //     setMode("black");
  //     setColor("white")
  //   }
  // }
  return (
    <div className={`App ${show ? "dark-mode" : "light-mode"}`}>
      {/* <div style={{backgroundColor:mode, color:colour}}> */}
      <h2>{`${show ? "Dark" : "Light"}`} Mode App</h2>
      <h5>Hello CodeSandbox</h5>
      <p>RANITA, Software Engineer, will not give up</p>
      <span>Full Stack Developer</span>
      {/* </div> */}
      <br />
      <br />
      {/* <button onClick={changeMode}>Toggle Mode</button> */}
      <Toggle value={show} setValue={setDisplay} />
    </div>
  );
}
// {`App ${darkMode ? "dark-mode" : "light-mode"}`}>
