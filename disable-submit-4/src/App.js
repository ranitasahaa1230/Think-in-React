import "./styles.css";
import { useState } from "react";

export default function App() {
  const [text1, getText1] = useState("");
  const [text2, getText2] = useState("");
  const [disable, setDisabled] = useState(false);

  function passwordChecker() {
    if (text1 === text2) {
      console.log(text1);
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }

  return (
    <div className="App">
      <label> Enter Password: </label>
      <input
        type="password"
        value={text1}
        placeholder="Enter Password"
        onChange={(e) => getText1(e.target.value)}
      />
      <br />
      <label> Re-Password: </label>
      <input
        type="password"
        placeholder="Confirm Password"
        value={text2}
        onChange={(e) => getText2(e.target.value)}
      />
      <button
        onClick={(e) => console.log(text1)}
        disabled={text1 === text2 ? false : true}
      >
        Submit
      </button>
    </div>
  );
}

// disabled={password2 === password1 ? false : true}
