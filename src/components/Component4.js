import React from "react";
import "./container1.css";

const Component4 = ({ color }) => {
  return (
    <div>
      <div className="cont1-stats2">
        <div
          className={color}
          //   style={{ backgroundColor: { color } }}
        ></div>
        <span className="cont1-stats2-text">Issues Created</span>
      </div>
    </div>
  );
};

export default Component4;
