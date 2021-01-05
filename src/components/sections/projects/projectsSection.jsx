import React, { useContext, useEffect } from "react";
import Card from "../../shared/card";
import ProjectStructure from "./projectStructure";
import ProjectContext from "../../../context/projects/projectContext";
import "./projects.css";
import COLORS from "../../shared/colors";

const ProjectsSection = () => {
  const { projects } = useContext(ProjectContext);

  const colors = COLORS;
  
  if (projects.length === 0)
    return (
      <p className="white">
        No projects{" "}
        <span role="img" aria-label="sad">
          😔
        </span>{" "}
        this may be an error, please, report this error to
        miguel.a.rodriguez.r@gmail.com
      </p>
    );

  else{
    setTimeout(()=>{
      const send = {id: 'tilt'}
      window.postMessage(send, '*');
    },200);
  }

  return (
    <div className="p-section">
      {projects.map((project,index) => (
        <Card key={project.name}>
          <ProjectStructure
            plink={project.plink}
            langs={project.languages}
            title={project.name}
            desc={project.description}
            color={colors[index%colors.length]}
            image={project.image}
          ></ProjectStructure>
        </Card>
      ))}
    </div>
  );
};

export default ProjectsSection;
