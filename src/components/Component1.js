import React from "react";
import "./container1.css";
import { BsQuestionCircle } from "react-icons/bs";
import Component4 from "./Component4";

const data1 = "#E5A158";

const Component1 = () => {
  return (
    <div className="container1">
      <div className="cont1-top">
        <div className="cont1-top-left">
          <h4 className="cont1-top-left1">Jira Issue Status</h4>
          <span className="cont1-top-left2">MAY 24</span>
        </div>
        <div className="cont1-top-right">
          <h5>Daily</h5>
          <BsQuestionCircle className="header-icons" />
        </div>
      </div>
      <div className="cont1-stats">
        <div className="cont1-stats-cont">
          <div className="cont1-stat1"></div>
          <span className="cont1-stat-item">42</span>
        </div>
        <div className="cont1-stats-cont">
          <div className="cont1-stat2"></div>
          <span className="cont1-stat-item">29</span>
        </div>
        <div className="cont1-stats-cont">
          <div className="cont1-stat3"></div>
          <span className="cont1-stat-item">19</span>
        </div>
      </div>
      <div className="cont1-stats2">
        <Component4 color="cont1-stats2-dot1" />
        <Component4 color="cont1-stats2-dot2" />
        <Component4 color="cont1-stats2-dot3" />
      </div>
      <div className="cont1-stats3">
        <div className="cont1-stats3-left">
          <span className="cont1-stats3-top">1k</span>
          <span className="cont1-stats3-bottom">
            Issue in total added this week
          </span>
        </div>
        <div className="cont1-stats3-right">
          <span className="cont1-stats3-top">90</span>
          <span className="cont1-stats3-bottom">Issues today</span>
        </div>
      </div>
      <div className="cont1-footer">
        <img src="/vector-185.svg" />
        <span className="cont1-footer-text">
          Higher by 50% compared to last week at 500
        </span>
      </div>
    </div>
  );
};

export default Component1;
