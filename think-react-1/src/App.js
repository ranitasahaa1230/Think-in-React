import "./styles.css";
import { useState } from "react";

export default function App() {
  const [liked, setLiked] = useState(true);
  const [isageLessThan18, setAge] = useState(false);
  const [fontSSize, setFontSize] = useState("2em");
  const [name, setName] = useState("");

  function set4em() {
    setFontSize("4em");
  }
  function set2em() {
    setFontSize("2em");
  }
  function set3em() {
    setFontSize("1em");
  }

  function setTanay() {
    setName("Tanay");
  }
  function setTanvi() {
    setName("Tanvi");
  }
  function setNeog() {
    setName("Neogrammer");
  }

  return (
    <div className="App">
      <input
        type="checkbox"
        value={liked}
        checked={liked}
        onChange={(e) => setLiked(e.target.checked)}
      />
      <label>I liked this</label>
      <br />
      <p>You {liked ? "like" : "did not like"} this!</p>

      <input
        type="number"
        placeholder="Enter your age"
        value={isageLessThan18}
        onChange={(e) => setAge(e.target.value)}
      />
      {isageLessThan18 && (
        <p style={{ color: "red" }}>
          {isageLessThan18 <= 18 ? "Age can't be less than 18. Error" : " "}
        </p>
      )}

      <h2 style={{ fontSize: `${fontSSize}` }}>I'm a complan girl</h2>

      <button onClick={set4em}>H1</button>
      <button onClick={set2em}>H2</button>
      <button onClick={set3em}>H3</button>

      <h4>Hello, I am {name}</h4>

      <button onClick={setTanay}>Tanay</button>
      <button onClick={setTanvi}>Tanvi</button>
      <button onClick={setNeog}>Neogrammer</button>
    </div>
  );
}
