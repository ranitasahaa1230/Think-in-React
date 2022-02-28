import "./styles.css";
import { useState } from "react";

export default function App() {
  const [showPassword, setShowPassword] = useState(false);

  function passwordType() {
    setShowPassword((prev) => !prev);
  }

  return (
    <div className="App">
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Confirm Password"
      />
      <button onClick={passwordType}>
        {showPassword ? "Hide" : "Show"} Password
      </button>
    </div>
  );
}
