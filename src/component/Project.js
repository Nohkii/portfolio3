import React from "react";
import { Link } from "react-router-dom";
import "../scss/Project.scss";

const Project = () => {
  return (
    <div className="project-container">
      <div className="project-box">
        <div className="project-all-left">
          <div
            className="project-left-box"
            onClick={() =>
              window.open(
                "https://www.youtube.com/watch?v=gUwWQq-z6lU&t=3s",
                "_blank"
              )
            }
          ></div>
          <div className="project-over"></div>
          <div className="project-textBox">Food Search API Site</div>
        </div>

        <div className="project-all-middle">
          <div
            className="project-mid-box"
            onClick={() =>
              window.open(
                "https://63a5358435a1fb24c59f8c35--todo-list-nohkki.netlify.app/",
                "_blank"
              )
            }
          ></div>
          <div className="project-over"></div>
          <div className="project-textBox">Todo List</div>
        </div>
        <div className="project-all-right">
          <Link to="/">
            <div className="project-right-box"></div>
          </Link>
          <div className="project-over"></div>
          <div className="project-textBox"> Portfolio Site</div>
        </div>
      </div>
    </div>
  );
};
// src="../../public/images/포폴캡쳐2.JPG">
export default Project;
