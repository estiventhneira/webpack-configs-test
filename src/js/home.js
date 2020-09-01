import "../css/main.css";

import text from "./text";

text();

if (module.hot) {
  module.hot.accept("./text.js", function () {
    console.log("hot module reloading");
    text();
  });
}
