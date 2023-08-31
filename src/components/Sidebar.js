import React from "react";
import "./sidebar.css";
import { HiOutlineHome } from "react-icons/hi";
import { HiOutlineInbox } from "react-icons/hi";
import { RiCompasses2Fill } from "react-icons/ri";
import { PiShareNetworkBold } from "react-icons/pi";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <HiOutlineHome className="sidebar-icons" />
      <div className="sidebar-icons-active">
        <HiOutlineInbox />
      </div>
      <RiCompasses2Fill className="sidebar-icons" />
      <PiShareNetworkBold className="sidebar-icons-color" />
    </div>
  );
};

export default Sidebar;
