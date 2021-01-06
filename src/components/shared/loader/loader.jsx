import React, { useContext, useEffect } from "react";
import ProjectContext from "../../../context/projects/projectContext";
import "./loader.css";

const Loader = () => {

  const { loading } = useContext(ProjectContext);

  useEffect(() => {},[loading])

  return (
    <div className={"container" + (!loading ? " loaded" : "")}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 98"
        width="50"
        height="98"
        className="loader-svg"
      >
        <style>
          {`
          tspan { white-space:pre }
          .shp0 { fill: transparent } 
          .shp1 { fill: none;stroke: #000000;stroke-width: 1.4 } 
          .txt1 { font-size: 43px;fill: transparent;font-weight: 400;font-family: 'Gothic A1', sans-serif } 
          .txt2 { font-size: 48px;fill: transparent;font-weight: 400;font-family: 'Gothic A1', sans-serif } 
          `}
        </style>
        <path id="Shape 4" className="shp0" d="M0 0L50 0L50 100L0 100L0 0Z" />
        <path id="Shape 1" className="shp1" d="M4 3L48 3L48 94.01L48 96" />
        <path id="Shape 2" className="shp1" d="M44 95L1.99 95L1.99 2" />
        <text id="M " style={{ transform: "matrix(1,0,0,1,6,43)" }}>
          <tspan x="0" y="0" className="txt1 txt">
            M
          </tspan>
        </text>
        <text id="R " style={{ transform: "matrix(1,0,0,1,9,86)" }}>
          <tspan x="0" y="0" className="txt2 txt">
            R
          </tspan>
        </text>
      </svg>
    </div>
  );
};

export default Loader;
