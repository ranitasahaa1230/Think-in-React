import "./styles.css";
import { useState } from "react";

export default function App() {
  const [text1, getText1] = useState("");
  const [text2, getText2] = useState("");

  return (
    <div className="App">
      <label htmlFor="password">Password:</label>
      <input
        id="password"
        type="password"
        value={text1}
        placeholder="Enter Password"
        onChange={(e) => getText1(() => e.target.value)}
      />
      <br />
      <label htmlFor="confirm-password">Confirm Password:</label>
      <input
        type="password"
        id="confirm-password"
        placeholder="Confirm Password"
        value={text2}
        onChange={(e) => getText2(() => e.target.value)}
      />

      {/* {text1===text2 ? " " : <p>Error</p>} */}

      {text2 !== text1 && text2 !== "" && <p>Passwords don't match</p>}
    </div>
  );
}
