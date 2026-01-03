import React, { useContext, useEffect, useRef } from "react";
import ProjectsSection from "../sections/projects/projectsSection";
import ExperienceSection from "../sections/experience/experienceSection";
import "./layout.css";
import { gsap } from "gsap";
import AboutSection from "../sections/about/aboutSection";
import ContactSection from "../sections/contact/contactSection";
import ScrollContext from "../../context/scroll/scrollContext";

const Rightinfo = () => {
  const rightRef = useRef(null);
  const experienceRef = React.createRef();
  const projectsRef = React.createRef();
  const aboutRef = React.createRef();
  const contactRef = React.createRef();
  const { position, setActualSection, setTopSections } = useContext(ScrollContext);

  useEffect(() => {
    gsap.from(rightRef.current, {
      autoAlpha: 0,
      duration: 1,
      ease: "none",
      delay: 1.5,
    });
  }, []);

  useEffect(() => {
    // console.log({position,aboutRef:aboutRef.current.offsetTop,contactRef:contactRef.current.offsetTop})
    setTopSections({contact:contactRef.current.offsetTop, about:aboutRef.current.offsetTop, myWork: projectsRef.current.offsetTop, experience:0 })
    if(position >= contactRef.current.offsetTop ){
      setActualSection('contact');
    } else if (position >= aboutRef.current.offsetTop ) {
      setActualSection('about');
    } else if (position >= projectsRef.current.offsetTop ){
      setActualSection('myWork');
    } else {
      setActualSection('experience')
    }
  }, [position]);

  return (
    <div className="right-container section-container" ref={rightRef}>
      <div></div>
      <div className="sec-title yellow thic">PROFESSIONAL EXPERIENCE</div>
      <ExperienceSection ref={experienceRef}></ExperienceSection>
      <div className="section-space"></div>
      <div className="sec-title yellow thic">PERSONAL PROJECTS</div>
      <ProjectsSection ref={projectsRef}></ProjectsSection>
      <div className="section-space"></div>
      <div className="sec-title yellow thic">ABOUT</div>
      <AboutSection ref={aboutRef}></AboutSection>
      <div className="section-space"></div>
      <div className="sec-title yellow thic">CONTACT</div>
      <ContactSection ref={contactRef}></ContactSection>
      <div className="section-space"></div>
    </div>
  );
};

export default Rightinfo;
