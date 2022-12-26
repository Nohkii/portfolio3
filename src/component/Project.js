import React from "react";
import "../scss/Project.scss";

const Project = () => {
  return (
    <div className="project-container">
      <div className="project-box">
        <div className="project-left-box" ></div>
        <br />
        {/* <div className="project-left-detail">API를 활용한 레시피 검색 사이트</div> */}
        <div
          className="project-mid-box"
          onClick={() =>
            window.open(
              "https://63a5358435a1fb24c59f8c35--todo-list-nohkki.netlify.app/",
              "_blank"
            )
          }
        >

        </div>
        <div className="project-right-box"></div>
        
      </div>
    </div>
  );
};
// src="../../public/images/포폴캡쳐2.JPG">
export default Project;
