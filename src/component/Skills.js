import React from "react";
import "../scss/Skills.scss";

const Skills = () => {
  return (
    <>
      <div className="skills-container">
        <div className="skills-small-container">
          <div className="skills-leftContainer">
            <div className="skills-left-box">
              <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white" />{" "}
              <br />  <br />
              <ul>
                <li>시맨틱 태그를 활용한 마크업</li>
                <li>페이지 콘텐트 구조화</li>
              </ul>
            </div>
            <div className="skills-left-box">
              <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white" />{" "}
            </div>
            <div className="skills-left-box">
              <img src="https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white" />{" "}
            </div>
            <div className="skills-left-box">
              <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=Javascript&logoColor=white" />{" "}
            </div>
          </div>
          <div className="skills-rightContainer">
            <div className="skills-right-box">
              <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white" />{" "}
              <br />  <br />
              <ul>
                <li>함수형 컴포넌트 작성
                </li>
                <li>react-router-dom을 사용한 페이지 이동</li>
              </ul>
            </div>
            <div className="skills-right-box">
              <img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=flat-square&logo=Visual Studio Code&logoColor=white" />{" "}
              <br />  <br />
              <ul>
                <li>

                </li>
              </ul>
            </div>
            <div className="skills-right-box">
              <img src="https://img.shields.io/badge/Notion-000000?style=flat-square&logo=Notion&logoColor=white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
