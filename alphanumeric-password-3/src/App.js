import "./styles.css";
import { useState } from "react";

export default function App() {
  const [text, getText] = useState("");
  const [error, setError] = useState(false);

  function alphPasswordChecker() {
    text.match(/[A-Za-z]+\d+|\d+[A-Za-z]+/) ? setError(false) : setError(true);
  }

  return (
    <div className="App">
      <input
        type="text"
        value={text}
        placeholder="Alphanumeric Password"
        onChange={(e) => getText(e.target.value)}
      />
      <button onClick={alphPasswordChecker}>Submit</button>
      {error && <p>Password should contain alphabets and numbers</p>}
    </div>
  );
}

// {error ? <div>Password should contain alphabets and numbers</div> : null}
