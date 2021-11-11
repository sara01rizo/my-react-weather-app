import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>My React Weather App</h1>
        <Weather defaultCity="Berlín" />
        <footer>
          <span>This project is an </span>
          <a
            href="https://github.com/sara01rizo/my-react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open source
          </a>
          <span> coded by </span>
          <a
            href="https://www.linkedin.com/in/sara-andrea-pulido-buenrostro-750b181b3/"
            target="_blank"
            rel="noreferrer"
          >
            Sara Pulido
          </a>
          ✌
        </footer>
      </div>
    </div>
  );
}
