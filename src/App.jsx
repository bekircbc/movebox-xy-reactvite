import { useState, useEffect } from "react";
import "./App.scss";

function App() {
  const [xPosition, setXPosition] = useState(250);
  const [yPosition, setYPosition] = useState(250);

  useEffect(() => {}, [xPosition, yPosition]);
  return (
    <div className="App">
      <h2>Move an element left, right, center when button is pressed</h2>
      <div className="controls">
        <div className="row">
          <button className="up" onClick={() => setYPosition(yPosition - 2)}>
            Up
          </button>
        </div>
        <div className="row">
          <button className="left" onClick={() => setXPosition(xPosition - 2)}>
            Left
          </button>
          <button
            className="center"
            onClick={() => {
              setXPosition(250);
              setYPosition(250);
            }}
          >
            Center
          </button>
          <button className="right" onClick={() => setXPosition(xPosition + 2)}>
            Right
          </button>
        </div>
        <div className="row">
          <button className="down" onClick={() => setYPosition(xPosition + 2)}>
            Down
          </button>
        </div>

        <div className="gameArea">
          <div
            className="box"
            style={({ top: `${xPosition}px)` }, { right: `${xPosition}px)` })}
          ></div>
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
//
//       ></div>
//     </div>
//   );
// }

// export default App;
