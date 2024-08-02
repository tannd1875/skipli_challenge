import React from "react";

const Caption = ({ topic, caption, status }) => {
  const handleSaveStatus = () => {
    if (status === "Save") {
      fetch("http://localhost:8000/api/caption/save-content", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          topic: topic,
          data: caption,
          phoneNumber: localStorage.getItem("phoneNumber"),
        }),
      }).then((response) => {
        console.log(response.ok);
        return response.ok;
      });
    }
  };
  return (
    <div className="caption__container">
      <p className="caption__content">{caption}</p>
      <div className="caption__button_group">
        <button className="caption__button" onClick={handleSaveStatus()}>
          {status}
        </button>
        <button className="caption__button">Share</button>
      </div>
    </div>
  );
};

export default Caption;
