import { useState } from "react";
import "./App.scss";

function App() {
  const [pos, setPos] = useState(0);

  return (
    <div className="spa006">
      <h2>Spa006 - Move element up on button click</h2>
      <button onClick={() => setPos(pos - 10)}>Move up</button>
      <div
        className="theElement"
        style={{ transform: `translateY(${pos}px)` }}
      ></div>
    </div>
  );
}

export default App;
