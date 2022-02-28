import "./styles.css";
import { useState } from "react";

export default function App() {
  const [tweet, setTweet] = useState("");

  return (
    <div className="App">
      <input
        type="text"
        value={tweet}
        onChange={(e) => setTweet(() => e.target.value)}
        disabled={50 - tweet.length <= 0}
      />
      <p style={{ color: 50 - tweet.length <= 15 ? "red" : "green" }}>
        {50 - tweet.length}
      </p>
    </div>
  );
}
