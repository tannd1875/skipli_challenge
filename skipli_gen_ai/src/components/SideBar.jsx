import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup, faUser } from "@fortawesome/free-solid-svg-icons";
import "../styles/SideBar.css";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar">
      <p className="heading">Skipli Gen AI</p>
      <div className="sidebar__body">
        <Link className="reset-link" to="/dashboard">
          <div className="sidebar__item">
            <FontAwesomeIcon
              icon={faLayerGroup}
              className="sidebar__item__icon"
            />
            <p className="sidebar__item__name">Service</p>
          </div>
        </Link>
        <Link to="/profile" className="reset-link">
          <div className="sidebar__item">
            <FontAwesomeIcon icon={faUser} className="sidebar__item__icon" />
            <p className="sidebar__item__name">Profile</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
