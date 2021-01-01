import React, { useContext, useEffect } from "react";
import ProjectContext from "../../context/projects/projectContext";
import "./layout.css";
import LeftInfo from "./leftInfo";
import Rightinfo from "./rightinfo";

const Pcontainer = () => {
  const { loading } = useContext(ProjectContext);

  useEffect(() => {
    if (loading) {
      console.log("data loaded");
    }
  }, [loading]);

  if (loading)
    return (
      <p className="white">
        loading
      </p>
    );

  return (
    <div className="big-container">
      <LeftInfo></LeftInfo>
      <Rightinfo></Rightinfo>
    </div>
  );
};

export default Pcontainer;
