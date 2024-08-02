import React, { useState } from "react";
import SideBar from "../components/SideBar";
import "../styles/ForInspire.css";
import IdeaGenerated from "../components/IdeaGenerated";

const StartFromInspire = () => {
  const [topic, setTopic] = useState("");
  const [ideaList, setIdeaList] = useState("");
  const handleGetIdea = () => {
    fetch("http://localhost:8000/api/caption/idea", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        topic: topic,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setIdeaList(data);
        console.log(ideaList);
      });
  };
  return (
    <div className="dashboard__layout">
      <SideBar></SideBar>
      <div className="dashboard__main">
        <h1>Now, we can help you a lot</h1>
        <p>
          Stick starting at a blank page? Tell us what topic you have in mind
          and Skipli Gen AI will generate a list of post ides and caption for
          you.
        </p>
        <form className="generate_form generate_form_topic">
          <label className="form__label" htmlFor="">
            What topic do you want ides for?
          </label>
          <input
            className="form__input"
            type="text"
            placeholder="Enter topic"
            onChange={(e) => {
              setTopic(e.target.value);
            }}
          />
          <input
            className="form__submit"
            type="button"
            value="Generate idea"
            onClick={handleGetIdea}
          />
        </form>
        {ideaList ? (
          <IdeaGenerated
            ideaList={ideaList.slice(2).slice(0, -1)}
          ></IdeaGenerated>
        ) : null}
      </div>
    </div>
  );
};

export default StartFromInspire;
