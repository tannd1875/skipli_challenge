import React, { useState } from "react";
import SideBar from "../components/SideBar";
import "../styles/ForScratch.css";
import CaptionGenerated from "../components/CaptionGenerated";
import { useSearchParams } from "react-router-dom";

const GenerateFromScratch = () => {
  const [captionList, setCaptionList] = useState();
  const [searchParam] = useSearchParams();
  const socialNetwork = searchParam.get("social").slice(0, -5);
  const [topic, setTopic] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [tone, setTone] = useState("");
  const optionList = [
    "Friendly",
    "Luxury",
    "Relaxed",
    "Professional",
    "Bold",
    "Adventurous",
    "Witty",
    "Persuasive",
    "Empathetic",
  ];

  const handleSubmitted = () => {
    console.log(socialNetwork, topic, tone);
    fetch("http://localhost:8000/api/caption", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        socialNetwork: socialNetwork,
        subject: topic,
        tone: tone,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCaptionList(data);
      });
    setSubmitted(true);
  };
  return (
    <div className="dashboard__layout">
      <SideBar></SideBar>
      <div className="dashboard__main scratch_layout">
        <h1>{socialNetwork}</h1>
        <form action="" method="get" className="generate_form">
          <label className="form__label" htmlFor="">
            What topic do you want a caption for?
          </label>
          <input
            className="form__input"
            type="text"
            onChange={(e) => {
              setTopic(e.target.value);
              if (topic === "") setCaptionList("");
              setSubmitted(false);
            }}
          />
          <label className="form__label" htmlFor="">
            What should your caption sound like?
          </label>
          <select
            className="form__tone"
            onChange={(e) => {
              setTone(e.target.value);
              setSubmitted(false);
            }}
          >
            {optionList.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <input
            className="form__submit"
            type="button"
            value="Generate caption"
            onClick={() => handleSubmitted()}
          />
        </form>
        {submitted && captionList ? (
          <CaptionGenerated
            List={captionList.slice(1)}
            topic={topic}
          ></CaptionGenerated>
        ) : null}
      </div>
    </div>
  );
};

export default GenerateFromScratch;
