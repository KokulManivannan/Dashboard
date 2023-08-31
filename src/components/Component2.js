import React from "react";
import "./container2.css";
import { BsQuestionCircle } from "react-icons/bs";
import Component3 from "./Component3";

const data = [
  {
    name: "Srinivas",
    reviewed: "68",
    score: "987",
    img: "/group-1244831140.svg",
  },
  {
    name: "Tom",
    reviewed: "48",
    score: "783",
    img: "/group-1244831140.svg",
  },
  {
    name: "Nawaz",
    reviewed: "42",
    score: "682",
    img: "/group-1244831142.svg",
  },
  {
    name: "Noah",
    reviewed: "34",
    score: "500",
    img: "/group-1244831142.svg",
  },
  {
    name: "Sera",
    reviewed: "23",
    score: "452",
    img: "/group-1244831142.svg",
  },
];

const Component2 = () => {
  return (
    <div className="container2">
      <div className="cont2-top">
        <h4 className="cont2-top-left">Top Contributors</h4>
        <div className="cont2-top-right">
          <h5>Weekly</h5>
          <BsQuestionCircle className="header-icons" />
        </div>
      </div>
      <div className="cont2-head">
        <span>Contributors</span>
        <span>Closed</span>
        <span>Reviewed</span>
        <span>Scores</span>
      </div>
      <div>
        {data.map((d, i) => {
          return <Component3 key={i} data={d} />;
        })}
      </div>
      <div className="cont2-footer">
        <img src="/vector-188.svg" />
        <span className="cont2-footer-text">
          Users who have commited key secrets in their project
        </span>
      </div>
    </div>
  );
};

export default Component2;
