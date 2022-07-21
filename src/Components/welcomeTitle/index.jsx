import React from "react";
import './style.scss'


const WelcomeTitle = (props) => {
  return (
    <div className="G-Container">
      <div className="titleContainer">
        <div className="title">
          <h2>{props.title}</h2>
          <span>{props.description}</span>
        </div>
      </div>
    </div>
  );
};

export default WelcomeTitle;
