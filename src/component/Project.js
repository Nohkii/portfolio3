import React from "react";
import { Link } from "react-router-dom";
import "../scss/Project.scss";

const Project = () => {
  return (
    <div className="project-container">
      <div className="project-box">
        <div className="project-all-left">
          <div className="project-left-box"></div>
          <div
            className="project-over"
            onClick={() =>
              window.open(
                "https://www.youtube.com/watch?v=gUwWQq-z6lU&t=3s",
                "_blank"
              )
            }
          >
            {" "}
            <span>
              API를 활용한 음식 검색 사이트 입니다.
              <br /> <br /> 처음으로 완성한 개인 프로젝트이며 HTML, CSS, Vanilla JS를 활용해 만들었습니다.{" "}
            </span>
          </div>
          <div className="project-textBox">Food Search API Site</div>
        </div>

        <div className="project-all-middle">
          <div className="project-mid-box"></div>
          <div
            className="project-over"
            onClick={() =>
              window.open(
                "https://63a5358435a1fb24c59f8c35--todo-list-nohkki.netlify.app/",
                "_blank"
              )
            }
          >
            <span>
              일정을 관리할 수 있는 Todo List 입니다.
              <br /> <br />React, Css module을 활용해 만들었습니다.{" "}
            </span>
          </div>
          <div className="project-textBox">Todo List</div>
        </div>
        <div className="project-all-right">
          
            <div className="project-right-box"></div>
          
          <Link to="/">
          <div className="project-over">
            <span>
              저를 소개하는 포트폴리오 사이트입니다.
              <br />
              <br />
              React, Sass를 활용해 만들었으며, 디자인부터 기능 구현까지 혼자
              진행했습니다.{" "}
            </span>
          </div>
          </Link>
          <div className="project-textBox"> Portfolio Site</div>
        </div>
      </div>
    </div>
  );
};
export default Project;
