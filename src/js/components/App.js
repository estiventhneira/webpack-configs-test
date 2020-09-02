import React, { useState } from "react";
import data from "./data.json";

function App() {
  const [loaderList, setLoaderList] = useState([]);
  function mostrarloader() {
    setLoaderList(data.loaders);
  }
  return (
    <div>
      que linda app hecha en react js
      <ul>
        {loaderList.map((loader) => (
          <li key={loader.id}>{loader.name}</li>
        ))}
      </ul>
      <button onClick={mostrarloader}>mostrar loader</button>
    </div>
  );
}

export default App;
