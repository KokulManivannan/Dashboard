import React from "react";
import "./container3.css";

const Component3 = ({ data }) => {
  return (
    <div className="container3">
      <div className="cont3-left">
        <img src={data.img} />
        <span className="cont3-left-text">{data.name}</span>
      </div>
      <div className="cont3-right">
        <span className="cont3-right-item1">{data.reviewed}</span>
        <span className="cont3-right-item2">{data.reviewed}</span>
        <span className="cont3-right-item3">{data.score}</span>
      </div>
    </div>
  );
};

export default Component3;
