import React, { Fragment, useContext, useEffect, useRef } from "react";
import ProjectContext from "../../context/projects/projectContext";
import ExperienceContext from "../../context/experiences/experienceContext";
import "./layout.css";
import LeftInfo from "./leftInfo";
import Rightinfo from "./rightinfo";
import { gsap } from "gsap";
import ScrollContext from "../../context/scroll/scrollContext";
import Loader from "../shared/loader/loader";

const Pcontainer = () => {
  const { message, loading, getProjects } = useContext(ProjectContext);
  const { getExperiences } = useContext(ExperienceContext);
  const {
    setPosition,
    selectedSection,
    topSections,
    setSelectedSection,
  } = useContext(ScrollContext);

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
    getExperiences();
    // eslint-disable-next-line
  }, [loading, message]);

  useEffect(() => {
    if (bigRef.current && selectedSection) {
      bigRef.current.scrollTo({
        top: topSections[selectedSection],
        behavior: "smooth",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSection]);

  const handleScroll = (e) => {
    // console.log(bigRef)
    setSelectedSection(null);
    setPosition(bigRef.current.scrollTop + bigRef.current.offsetHeight / 2);
  };

  return (
    <Fragment>
      <Loader></Loader>
      {!loading && (
        <div className="big-container" onScroll={handleScroll} ref={bigRef}>
          <div className="top-shadow"></div>
          <div className="bottom-shadow"></div>
          <div className="mid-contaier">
            <LeftInfo></LeftInfo>
            <Rightinfo></Rightinfo>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Pcontainer;
