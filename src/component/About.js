import React from "react";
import "../scss/About.scss";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-leftBox">
        <div className="about-photo"></div>
        <div className="about-name">
          <span className="about-semiTitle">노은기</span>
          <br />
          <br />
          <span className="about-left-detailtxt">
            1996.1.29
          </span>
        </div>
      </div>
      <div className="about-rightBox">
        <div className="about-carrer">
          <span className="about-semiTitle">Education</span>
          <br />
          <br />
          <span className="about-detailtxt">
          SeSAC 기업연계형 프론트엔드 실무 프로젝트 과정 
          </span>
        </div>
        <div className="about-introduce">
          <span className="about-semiTitle">Career</span>
          <br />
          <br />
          <span className="about-detailtxt">
          - 현대카드 어린이집 2020.3~2022.2
            <br />- NCSOFT 어린이집 2022.3~2022.9
          </span>
        </div>
        <div className="about-skill">
          <span className="about-semiTitle">Introduction</span>
          <br />
          <br />
          <span className="about-detailtxt">
          안녕하세요? 끊임없이 성장하는 개발자 노은기입니다.
            <br /> 어린이집에서 교사로 2년 반을 근무하던 중, 우연히 코딩 관련
            프로그램을 접하고 흥미를 느껴 지속적으로 공부하고 있습니다. <br />
            비전공자로써 개발자가 되기로 마음먹은 만큼 전공자에 준하는 실력을
            갖추기 위해 매일의 공부 계획을 세우고 나만의 커리큘럼에 맞춰 꾸준히
            학습하고 있습니다. <br />
            앞으로도 높은 목표를 가지고 끊임없이 성장하는 모습을
            보여드리겠습니다.
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
