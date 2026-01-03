import React, { useContext, useState } from "react";
import Card from "../../shared/card";
import ExperienceStructure from "./experienceStructure";
import ExperienceContext from "../../../context/experiences/experienceContext";
import "./experience.css";
import COLORS from "../../shared/colors";

const ExperienceSection = React.forwardRef((props, ref) => {

  const { experiences } = useContext(ExperienceContext);
  const [seeMore, setSeeMore] = useState(false);
  const colors = COLORS;

  if (experiences.length === 0)
    return (
      <p className="white">
        No experiences{" "}
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

  const principalExperiences = experiences.slice(0, 3);
  const moreExperiences = experiences.slice(3);

  return (
    <div className="e-section" ref={ref}>
      {principalExperiences.map((experience, index) => (
        <Card key={experience.id} className="expcard">
          <ExperienceStructure
            companyName={experience.companyName}
            companyLogo={experience.companyLogo}
            startDate={experience.startDate}
            endDate={experience.endDate}
            projects={experience.projects}
            color={colors[index % colors.length]}
          />
        </Card>
      ))}
      {seeMore &&
        moreExperiences.map((experience, index) => (
          <Card key={experience.id} className="expcard">
            <ExperienceStructure
              companyName={experience.companyName}
              companyLogo={experience.companyLogo}
              startDate={experience.startDate}
              endDate={experience.endDate}
              projects={experience.projects}
              color={colors[(index + 2) % colors.length]}
            />
          </Card>
        ))}
      {!seeMore && moreExperiences.length > 0 && (
        <div className="more-btn" onClick={() => setSeeMore(true)}>
          - View all experience
        </div>
      )}
    </div>
  );
});

export default ExperienceSection;
