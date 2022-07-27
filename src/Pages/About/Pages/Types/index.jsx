import React from "react";

const Types = (props) => {
  const typesItems = props.typesItems;
  return (
    <div className="typeContainer">
      <div
        className="typeImg"
        style={{ backgroundImage: `url('${typesItems.img}')` }}
      ></div>
      <div className="typeText">{typesItems.title}</div>
      <div className="btnCont">
        <button style={{ backgroundColor: typesItems.buttonColor }}>
          Read More
        </button>
      </div>
    </div>
  );
};

export default Types;
