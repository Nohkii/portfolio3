import React from "react";
import "../scss/Home.scss";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-text1"></div>
      <div className="home-text1">끊임없이 성장하는&nbsp;</div>
      <div className="home-mainName">
        <span style={{ color: "#30c7fa" }}>개</span>
        <span style={{ color: "#30c7fa" }}>발</span>
        <span style={{ color: "#30c7fa" }}>자</span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span>노</span>
        <span>은</span>
        <span>기</span>
      </div>
      <div className="home-text1"> 입니다.</div>
    </div>
  );
};

export default Home;
