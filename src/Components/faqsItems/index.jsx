import React, { Children, useState } from "react";
import "./style.scss";

const FaqsItems = (props) => {
  const title = props.title;
  const description = props.description

  const [state, setState] = useState(true);

  const activator = () => {
    setState(!state);
  };
  return (
    <div className="G-Container">
      <div className={state ? "F-containerDisabled" : 'F-containerActive'}>
        <button
          onClick={activator}
          className={state ? "disabledBtn" : "activeBtn"}
        >
          {title}
          <div className="icon-arrow" />
        </button>
        <div className={state ? "activeDiv" : "disabledDiv"}>
          {description}
        </div>
      </div>
    </div>
  );
};

export default FaqsItems;
