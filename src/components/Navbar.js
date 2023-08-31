import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-items">
        {/* <MenuIcon /> */}
        <img className="navbar-image" alt="" src="/group-1244831167.svg" />
        <h3 className="navbar-item">Dashboards</h3>
        <h3 className="navbar-item">Salesforce</h3>
        <h3 className="navbar-item-visit">Engineer Report</h3>
      </div>
    </div>
  );
};

export default Navbar;
