import React from 'react';
import Card from '../../shared/card';
import "./about.css";
import AboutStructure from './aboutStructure';

const AboutSection = () => {

    const years = Math.abs(new Date(new Date() - new Date('10/13/1993')).getUTCFullYear() - 1970);

    const text = "Hi, my name is Miguel Rodriguez, I’m a sistems engineer based in Pasto - Colombia, I love building and designing exceptional, high-quality websites and applications. I have worked in different software construction projects for recognized financial, governmental and telecommunications, companies arround the world. I am someone who has been able to grow up professionally, someone who usually faces the future and the challenges that it brings with positivity and enthusiasm."

    const techlist = ['Angular', 'React', 'Node.js', 'Wordpress', 'Java-Spring', 'R'];
    return (
        <div className="a-section">
            <Card>
                <AboutStructure years={years} text={text} techlist={techlist}></AboutStructure>
            </Card>
        </div>
    );
};

export default AboutSection;