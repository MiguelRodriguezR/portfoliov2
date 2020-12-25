import React from 'react';
import './layout.css';
import LeftInfo from './leftInfo';
import Rightinfo from './rightinfo';

const Pcontainer = () => {
    return (
        <div className="big-container">
            <LeftInfo></LeftInfo>
            <Rightinfo></Rightinfo>
        </div>
    );
};

export default Pcontainer;