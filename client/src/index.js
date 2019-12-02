import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "milligram";
import "./styles.css";
import * as serviceWorker from "./serviceWorker";

import App from "./App";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

//makes the app work offline and load data faster

serviceWorker.register();
