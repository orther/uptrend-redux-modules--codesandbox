import React from "react";
import ReactDOM from "react-dom";
import Inspector from "react-inspector";
import { normalize } from "normalizr";

import { locationAnswers } from "./schema";
import locationAnswersRespData from "./data";

const normalizedData = normalize(locationAnswersRespData, locationAnswers);

function App() {
  return (
    <div className="App">
      <h1>Input Data (api resp data)</h1>
      <Inspector data={locationAnswersRespData} expandLevel={3} />

      <h1>Normalized Data (entites data)</h1>
      <Inspector data={normalizedData} expandLevel={5} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
