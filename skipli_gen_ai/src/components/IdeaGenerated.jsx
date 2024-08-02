import React from "react";
import Idea from "./Idea";
import { Link } from "react-router-dom";

const IdeaGenerated = ({ ideaList }) => {
  return (
    <div className="caption">
      <h1>Idea generated for you</h1>
      <p>Choose one idea which you like it, you also custom them after.</p>

      {ideaList.map((idea, index) => (
        <Link
          to={`/generate-inspire?topic=${idea.slice(2)}`}
          className="reset-link"
        >
          <Idea key={index} idea={idea.slice(2)}></Idea>
        </Link>
      ))}
    </div>
  );
};

export default IdeaGenerated;
