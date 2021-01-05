import React, { useEffect, useRef } from 'react';
import ProjectsSection from '../sections/projects/projectsSection';
import './layout.css';
import { gsap } from "gsap";
import AboutSection from '../sections/about/aboutSection';
import ContactSection from '../sections/contact/contactSection';

const Rightinfo = () => {

    const rightRef = useRef(null);

    useEffect(() => {    
        gsap.from(rightRef.current,{
          autoAlpha: 0,
          duration: 1,
          ease: "none",
          delay: 1.5,
        });
        
      }, []);


    return (
        <div className="right-container section-container" ref={rightRef}>
            <div className="sec-title yellow thic">MY WORK</div>
            <ProjectsSection></ProjectsSection>
            <div className="section-space"></div>
            <div className="sec-title yellow thic">ABOUT</div>
            <AboutSection></AboutSection>
            <div className="section-space"></div>
            <div className="sec-title yellow thic">CONTACT</div>
            <ContactSection></ContactSection>
            <div className="section-space"></div>
        </div>
    );
};

export default Rightinfo;