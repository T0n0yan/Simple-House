import React from "react";
import "./style.scss";
import "../../../../assets/Styles/Global.scss";
import icons from "../../../../assets/Icons/style.css";

const StaffContainer = (props) => {
  const information = props.information;

  return (
    <div className="container">
      <div
        className="leftSide"
        style={{ backgroundImage: `url('${information.img}')` }}
      ></div>
      <div className="rightSide">
        <h2 className="name">{information.name}</h2>
        <span className="proffesion">{information.proffesion}</span>
        <span className="bio">{information.biogrophie}</span>
        <div className="socialIcons" style={{ display: "flex" }}>
          <a href="https://twitter.com/" target="_blank">
            <div className={information.twitter}></div>
          </a>
          <a href="https://www.facebook.com/" target="_blank">
            <div className={information.facebook}></div>
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <div className={information.instagram}></div>
          </a>
          <a href=" https://www.youtube.com/" target="_blank">
            <div className={information.youtube}></div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default StaffContainer;
