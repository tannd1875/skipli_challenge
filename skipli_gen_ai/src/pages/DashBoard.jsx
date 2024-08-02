import React from "react";
import SideBar from "../components/SideBar";
import OptionChoice from "../components/OptionChoice";
import "../styles/DashBoard.css";
import { Link } from "react-router-dom";

const DashBoard = () => {
  return (
    <div className="dashboard__layout">
      <SideBar></SideBar>
      <div className="dashboard__main">
        <h1 className="dashboard__heading">Now, we can help you a lot</h1>
        <Link to={"/scratch"} className="reset-link">
          <OptionChoice
            title={"Create new captions from scratch"}
            description={"Generate new caption  to engage, delight or sell"}
          ></OptionChoice>
        </Link>
        <Link to={"/inspire"} className="reset-link">
          <OptionChoice
            title={"Get Inspire"}
            description={"Generate post ideas and caption for a topic"}
          ></OptionChoice>
        </Link>
      </div>
    </div>
  );
};

export default DashBoard;
