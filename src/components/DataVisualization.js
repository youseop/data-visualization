import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { data } from "../data/jsondata.js";

const DataVisualization = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const svg = d3
      .select(chartRef.current)
      .append("svg")
      .attr("width", 500)
      .attr("height", 300);

    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 50)
      .attr("y", (d) => 300 - d.intensity * 20)
      .attr("width", 40)
      .attr("height", (d) => d.intensity * 20)
      .attr("fill", "steelblue");
  }, []);

  return <div ref={chartRef}></div>;
};

export default DataVisualization;
