import React from "react";
import { Link } from "react-router-dom";
import "../scss/Project.scss";

const Project = () => {
  return (
    <div className="project-container">
      <div className="project-box">
        <div
          className="project-left-box"
          onClick={() =>
            window.open(
              "https://www.youtube.com/watch?v=gUwWQq-z6lU&t=3s",
              "_blank"
            )
          }
        ></div>
        <br />
        <div
          className="project-mid-box"
          onClick={() =>
            window.open(
              "https://63a5358435a1fb24c59f8c35--todo-list-nohkki.netlify.app/",
              "_blank"
            )
          }
        ></div>
        <Link to="/">
          <div className="project-right-box"></div>
        </Link>
      </div>
    </div>
  );
};
// src="../../public/images/포폴캡쳐2.JPG">
export default Project;
