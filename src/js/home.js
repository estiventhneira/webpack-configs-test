import "../css/main.css";
/*
import text from "./text";
text();
*/

import { render } from "react-dom";
import App from "./components/App";
import React from "react";

/* if (module.hot) {
  module.hot.accept("./text.js", function () {
    console.log("hot module reloading");
    text();
  });
}
 */

render(<App />, document.getElementById("root"));
