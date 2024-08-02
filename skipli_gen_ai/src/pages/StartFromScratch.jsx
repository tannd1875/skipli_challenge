import React from "react";
import SideBar from "../components/SideBar";
import OptionChoice from "../components/OptionChoice";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const StartFormScratch = () => {
  return (
    <div className="dashboard__layout">
      <SideBar></SideBar>
      <div className="dashboard__main">
        <h1>Now, we can help you a lot</h1>
        <p>Choose what caption you want, we will help you!</p>
        <OptionChoice
          title={"Facebook post"}
          description={"Generate caption for Facebook post"}
          icon={faFacebookF}
        ></OptionChoice>
        <OptionChoice
          title={"Instagram post"}
          description={"Generate caption for Instagram post"}
          icon={faInstagram}
        ></OptionChoice>
        <OptionChoice
          title={"Twitter post"}
          description={"Generate caption for Twitter post"}
          icon={faTwitter}
        ></OptionChoice>
      </div>
    </div>
  );
};

export default StartFormScratch;
