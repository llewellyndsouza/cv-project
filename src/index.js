import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

let element = document.createElement("link");
element.href =
  "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css";
element.rel = "stylesheet";
element.integrity =
  "sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl";
element.crossOrigin = "anonymous";
document.querySelector("head").appendChild(element);

let elem = document.createElement('meta');
elem.name = "viewport";
elem.content = "width=device-width, initial-scale=1"
document.querySelector("head").appendChild(elem);