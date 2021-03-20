import React, { useContext, useState } from "react";
import Card from "../../shared/card";
import ProjectStructure from "./projectStructure";
import ProjectContext from "../../../context/projects/projectContext";
import "./projects.css";
import COLORS from "../../shared/colors";

const ProjectsSection = React.forwardRef((props, ref) => {
  const { projects } = useContext(ProjectContext);
  const [seeMore, setSeeMore] = useState(false);

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
  else {
    setTimeout(() => {
      const send = { id: "tilt" };
      window.postMessage(send, "*");
    }, 200);
  }

  const principalProjects = projects.slice(0,4);
  const moreProjects = projects.slice(4);

  return (
    <div className="p-section" ref={ref}>
      {principalProjects.map((project, index) => (
        <Card key={project.name}>
          <ProjectStructure
            plink={project.plink}
            langs={project.languages}
            title={project.name}
            desc={project.description}
            color={colors[index % colors.length]}
            image={project.image}
          ></ProjectStructure>
        </Card>
      ))}
      {seeMore && moreProjects.map((project, index) => (
        <Card key={project.name}>
          <ProjectStructure
            plink={project.plink}
            langs={project.languages}
            title={project.name}
            desc={project.description}
            color={colors[index % colors.length]}
            image={project.image}
          ></ProjectStructure>
        </Card>
      ))}
      { !seeMore && (<div className="more-btn" onClick={()=>setSeeMore(true)}>- View all work</div>)}
    </div>
  );
});

export default ProjectsSection;
