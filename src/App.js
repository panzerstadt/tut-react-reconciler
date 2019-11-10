import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [show, setShow] = useState(true); // uses removeChild
  const [count, setCount] = useState(0);

  return (
    <div className="App" onClick={() => setShow(show => !show)}>
      <header className="App-header">
        {show && <img src={logo} className="App-logo" alt="logo" />}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Again!
        </a>
        <br />
        <button onClick={() => setCount(count + 1)}>Press me!</button>
        <p>I have been pressed {count} times.</p>
      </header>
    </div>
  );
};

export default App;
