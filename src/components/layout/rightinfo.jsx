import React, { useEffect, useRef } from 'react';
import ProjectsSection from '../sections/projects/projectsSection';
import './layout.css';
import { gsap } from "gsap";

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
            <ProjectsSection></ProjectsSection>
        </div>
    );
};

export default Rightinfo;