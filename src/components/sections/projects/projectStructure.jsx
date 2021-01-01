import React from 'react';
import "./projects.css"

const ProjectStructure = ({langs, title, desc, image, color}) => {
    return (
        <div className="project-structure">
            <div className="left">
                <div className="p-langs" style={{"color" : color}}>{langs.toUpperCase()}</div>
                <div className="p-title">{title}</div>
                <div className="p-desc">{desc}</div>
            </div>
            <div className="right">
                <div className="img" style={{backgroundImage: "url('"+image+"')"}}></div>
            </div>
        </div>
    );
};

export default ProjectStructure;