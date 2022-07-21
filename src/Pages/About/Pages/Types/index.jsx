import React from "react";
import "./style.scss";

const Types = (props) => {
  const typesItems = props.typesItems;
  return (
    <div className="typeContainer">
      <div
        className="g-backgroundimg typeImg"
        style={{ backgroundImage: `url('${typesItems.img}')` }}
      ></div>
      <div className="typeText">{typesItems.title}</div>
      <div className="btnCont">
        <button style={{backgroundColor:typesItems.buttonColor}}>Read More</button>
      </div>
    </div>
  );
};

export default Types;
