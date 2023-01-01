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
              <br /> <br />
              <ul>
                <li>- HTML 태그를 이용한 웹페이지 구성</li>
                <li>- 시맨틱 태그를 활용한 마크업</li>
                <li>- 페이지 콘텐트 구조화</li>
              </ul>
            </div>
            <div className="skills-left-box">
              <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white" />{" "}
              <br /> <br />
              <ul>
                <li>- CSS 선택자를 이용한 스타일 부여</li>
                <li>- Flex, Grid 속성을 활용한 레이아웃 구성</li>
                <li>- 미디어 쿼리를 통한 반응형 웹 제작</li>
              </ul>
            </div>
            <div className="skills-left-box">
              <img src="https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white" />{" "}
              <br /> <br />
              <ul>
                <li>- 변수 선언 및 @mixin을 활용한 효율적인 코드 작성</li>
                <li>- sass를 통한 협업</li>
              </ul>
            </div>
            <div className="skills-left-box">
              <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=Javascript&logoColor=white" />{" "}
              <br /> <br />
              <ul>
                <li>- 자료 유형별 메서드 사용</li>
                <li>- jQuery를 활용한 플러그인 사용</li>
                <li>
                  - 쿼리셀렉터를 이용한 HTLM DOM 접근 및 메서드 사용
                </li>
              </ul>
            </div>
          </div>
          <div className="skills-rightContainer">
            <div className="skills-right-box">
              <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white" />{" "}
              <br /> <br />
              <ul>
                <li>- 클래스형 및 함수형 컴포넌트 작성</li>
                <li>- useState, useRef,
                useEffect 등 Hooks 활용</li>
                <li>- react-router-dom을 사용한 페이지 이동</li>
              </ul>
            </div>
            {/* <div className="skills-right-box">
              <img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=flat-square&logo=Visual Studio Code&logoColor=white" />{" "}
            
            </div> */}
             <div className="skills-right-box">
              <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white" />
              <br /> <br />
              <ul>
                <li>- 프로젝트 버전 관리</li>
                <li>- 작업물 코드 공유</li>
                <li>- Github를 활용한 협업</li>
              </ul>
            </div>
            <div className="skills-right-box">
              <img src="https://img.shields.io/badge/Notion-000000?style=flat-square&logo=Notion&logoColor=white" />
              <br /> <br />
              <ul>
                <li>- 일정 관리</li>
                <li>- 프로젝트 세부 사항 및 진행 상황 공유</li>
                <li>- Notion을 활용한 협업</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
