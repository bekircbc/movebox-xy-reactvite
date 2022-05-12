import { useState } from "react";
import "./App.scss";

function App() {
  const [xPosition, setXPosition] = useState("Center");
  const [yPosition, setYPosition] = useState("");
  return (
    <div className="App">
      <h2>Move an element left, right, center when button is pressed</h2>
      <div className="controls">
        <div className="row">
          <button className="up" onClick={() => setYPosition("Up")}>
            Up
          </button>
        </div>
        <div className="row">
          <button className="left" onClick={() => setXPosition("Left")}>
            Left
          </button>
          <button
            className="center"
            onClick={() => {
              setXPosition("Center");
            }}
          >
            Center
          </button>
          <button className="right" onClick={() => setXPosition("Right")}>
            Right
          </button>
        </div>
        <div className="row">
          <button className="down" onClick={() => setYPosition("Down")}>
            Down
          </button>
        </div>

        <div className={`gameArea gameArea${xPosition} gameArea${yPosition}`}>
          <div className="box"></div>
        </div>
      </div>
    </div>
  );
}

export default App;

// function App() {
//   const [pos, setPos] = useState(0);

//   return (
//     <div className="spa006">
//       <h2>Spa006 - Move element up on button click</h2>
//       <button onClick={() => setPos(pos - 10)}>Move up</button>
//       <div
//         className="theElement"
//         style={{ transform: `translateY(${pos}px)` }}
//       ></div>
//     </div>
//   );
// }

// export default App;
