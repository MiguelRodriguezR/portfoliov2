import React from "react";
import "./card.css";

const Card = (props) => {
  const className = props.className ? `card ${props.className}` : "card";
  return <div className={className}>{props.children}</div>;
};

export default Card;
