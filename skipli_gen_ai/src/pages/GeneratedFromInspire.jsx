import React, { useState } from "react";
import SideBar from "../components/SideBar";
import CaptionGenerated from "../components/CaptionGenerated";
import { useSearchParams } from "react-router-dom";

const GeneratedFromInspire = () => {
  const [searchParam] = useSearchParams();
  const topicParam = searchParam.get("topic");
  const [topic, setTopic] = useState(topicParam);
  const [submitted, setSubmitted] = useState(false);
  const [captionList, setCaptionList] = useState();
  const handleSubmitted = () => {
    console.log(topic);
    fetch("http://localhost:8000/api/caption/idea-to-caption", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idea: topicParam,
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
        <form action="" method="get" className="generate_form">
          <label className="form__label" htmlFor="">
            This is your idea, you can custom it!
          </label>
          <textarea
            className="form__input idea__textarea"
            defaultValue={topicParam}
            type="text"
            onChange={(e) => {
              setTopic(e.target.value);
              setSubmitted(false);
            }}
          />
          <input
            className="form__submit"
            type="button"
            value="Generate caption"
            onClick={() => handleSubmitted()}
          />
        </form>
        {submitted && captionList ? (
          <CaptionGenerated
            List={captionList.slice(2).slice(0, -1)}
          ></CaptionGenerated>
        ) : null}
      </div>
    </div>
  );
};

export default GeneratedFromInspire;
