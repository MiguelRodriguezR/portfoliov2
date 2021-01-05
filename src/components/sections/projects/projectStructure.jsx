import React from 'react';
import "./projects.css"

const ProjectStructure = ({langs, title, desc, image, color, plink}) => {
    return (
        <a className="project-structure" href={plink}  target="_blank" rel="noreferrer">
            <div className="left">
                <div className="p-langs" style={{"color" : color}}>{langs.toUpperCase()}</div>
                <div className="p-title">{title}</div>
                <div className="p-desc">{desc}</div>
            </div>
            <div className="right">
                <div className="img" style={{backgroundImage: "url('"+image+"')"}}></div>
                <div className="img frame" style={{backgroundColor: color}}></div>
            </div>
        </a>
    );
};

export default ProjectStructure;