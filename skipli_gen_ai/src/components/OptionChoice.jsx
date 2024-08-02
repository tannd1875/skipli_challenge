import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const OptionChoice = ({ title, description, icon }) => {
  return (
    <>
      {!icon ? (
        <a href="#" className="option">
          <h2>{title}</h2>
          <p>{description}</p>
        </a>
      ) : (
        <Link to={`/generate-scratch?social=${title}`} className="reset-link">
          <a href="#" className="option option2">
            <FontAwesomeIcon icon={icon} className="option__icon" />
            <div>
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </a>
        </Link>
      )}
    </>
  );
};

export default OptionChoice;
