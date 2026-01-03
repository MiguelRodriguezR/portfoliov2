import React from 'react';
import "./about.css";

const AboutStructure = ({years,text,techlist}) => {
    return (
        <div className="about-structure">
            <div className="a-title">ABOUT ME</div>
            <div className="a-photo">
                <img src="https://i.imgur.com/fAKy7Id.jpeg" alt=""/>
            </div>
            <div className="a-desc">{text}</div>
            <div className="a-desc">Here are a few technologies I've been working with recently:</div>
            <ul className="a-techs">
                {techlist.map( tech => (
                    <li className="a-tech" key={tech}>{tech}</li>
                ))}
            </ul>
        </div>
    );
};

export default AboutStructure;