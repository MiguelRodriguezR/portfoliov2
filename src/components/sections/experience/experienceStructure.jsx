import React, { useState } from "react";
import "./experience.css";

const ExperienceStructure = ({
  companyName,
  companyLogo,
  startDate,
  endDate,
  projects,
  color,
}) => {
  const [expandedProject, setExpandedProject] = useState(null);

  const formatDate = (date) => {
    if (!date) return "Present";
    const d = new Date(date);
    return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  };

  const calculateDuration = (start, end) => {
    const startDate = new Date(start);
    const endDate = end ? new Date(end) : new Date();
    const months = Math.floor(
      (endDate - startDate) / (1000 * 60 * 60 * 24 * 30)
    );
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    if (years > 0 && remainingMonths > 0) {
      return `${years}y ${remainingMonths}m`;
    } else if (years > 0) {
      return `${years}y`;
    } else {
      return `${remainingMonths}m`;
    }
  };

  return (
    <div className="experience-structure">
      {/* Company Header */}
      <div className="experience-header">
        <div className="experience-header-left">
          <div className="company-name" style={{ color }}>
            {companyName.toUpperCase()}
          </div>
          <div className="company-duration">
            {formatDate(startDate)} - {formatDate(endDate)} •{" "}
            {calculateDuration(startDate, endDate)}
          </div>
        </div>
        <div className="experience-header-right">
          <div
            className="company-logo"
            style={{ backgroundImage: `url('${companyLogo}')` }}
          ></div>
          <div
            className="company-logo frame"
            style={{ backgroundColor: color }}
          ></div>
        </div>
      </div>

      {/* Projects */}
      <div className="projects-container">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-item ${
              expandedProject === index ? "expanded" : ""
            }`}
          >
            <div
              className="project-header"
              onClick={() =>
                setExpandedProject(expandedProject === index ? null : index)
              }
            >
              <div className="project-header-content">
                <div className="project-client-info">
                  <div
                    className="client-logo-small"
                    style={{ backgroundImage: `url('${project.clientLogo}')` }}
                  ></div>
                  <div className="project-title-info">
                    <div className="project-name">{project.projectName}</div>
                    <div className="project-client-name">
                      {project.client} •{" "}
                      {formatDate(project.startDate)} -{" "}
                      {formatDate(project.endDate)}
                    </div>
                  </div>
                </div>
                <div className="expand-icon">
                  {expandedProject === index ? "−" : "+"}
                </div>
              </div>
            </div>

            {expandedProject === index && (
              <div className="project-details">
                <div className="project-participation">
                  {project.participationDetails}
                </div>
                <div className="project-technologies">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="tech-tag"
                      style={{ borderColor: color, color }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                    style={{ color }}
                  >
                    View Project →
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceStructure;
