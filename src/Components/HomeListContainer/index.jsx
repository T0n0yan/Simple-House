import React from "react";
import "./style.scss";

const ListContainer = (props) => {
  const food = props.food
  return (

      <div className="listContainer">
        <div className="g-backgroundimg topContainer" style={{backgroundImage:`url('${food.img}')`}}></div>
        <div className="btnContainer">
          <span className="title">{food.title}</span>
          <span className="description">{food.description}</span>
          <div className="price">{food.price}</div>
        </div>
      </div>
  );
};

export default ListContainer;
