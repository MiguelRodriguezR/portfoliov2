import React, { useContext, useEffect, useRef } from "react";
import ProjectContext from "../../context/projects/projectContext";
import "./layout.css";
import LeftInfo from "./leftInfo";
import Rightinfo from "./rightinfo";
import { gsap } from "gsap";

const Pcontainer = () => {
  const { message, loading, getProjects } = useContext(ProjectContext);

  const bigRef = useRef(null);

  useEffect(() => {
    if (!loading) {
      console.log("data loaded");
      gsap.to(bigRef.current, {
        opacity: 1,
        duration: 0.1,
        ease: "none",
        delay: 0,
      });
      return;
    }

    if (message) {
      console.log(message);
      return;
    }

    getProjects();
    // eslint-disable-next-line
  }, [loading, message]);

  if (loading) return <p className="white">loading</p>;

  return (
    <div className="big-container" ref={bigRef}>
      <div className="top-shadow"></div>
      <div className="bottom-shadow"></div>
      <div className="mid-contaier">
        <LeftInfo></LeftInfo>
        <Rightinfo></Rightinfo>
      </div>
    </div>
  );
};

export default Pcontainer;
