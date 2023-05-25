import React from "react";
import DataVisualization from "./components/DataVisualization";
import FilterControls from "./components/FilterControls";
import "./App.css";

const App = () => {
  return (
    <div>
      <h1>Data Visualization</h1>
      <FilterControls />
      <DataVisualization />
    </div>
  );
};

export default App;
