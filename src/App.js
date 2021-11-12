import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="BERLIN" />
        <footer>
          <span>This project is an </span>
          <a
            href="https://github.com/sara01rizo/my-react-weather-app"
            target="_blank"
            rel="noreferrer"
            alt="Github"
          >
            Open source
          </a>
          <span> coded by </span>
          <a
            href="https://www.linkedin.com/in/sara-andrea-pulido-buenrostro-750b181b3/"
            target="_blank"
            rel="noreferrer"
            alt="Linkedin"
          >
            Sara Pulido
          </a>
          ✌
          <span>
            {" "}
            and hosted on{" "}
            <a
              href="https://suspicious-yalow-89ec88.netlify.app/"
              target="_blank"
              rel="noreferrer"
              alt="Netlify"
            >
              Netlify
            </a>{" "}
          </span>
        </footer>
      </div>
    </div>
  );
}
