import React from "react";
import { FiFilter } from "react-icons/fi";
import { LuSettings } from "react-icons/lu";
import { BsQuestionCircle } from "react-icons/bs";
import { BsFillBookmarkFill } from "react-icons/bs";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        {/* <img className="group-child2" alt="" src="/vector-615.svg" /> */}
        <BsFillBookmarkFill style={{ fontSize: "17px", color: "#0570b0" }} />
        <h2 className="header-left-text">Engineer Report</h2>
      </div>
      <div className="header-right">
        <BsQuestionCircle className="header-icons" />
        <FiFilter className="header-icons" />
        <LuSettings className="header-icons" />
      </div>
    </div>
  );
};

export default Header;
