import React from "react";
import { Link } from "react-router-dom";
import "../scss/Menu.scss";

const Menu = () => {
  return (
    <div className="menu-contatiner">
      <Link to="/">
        <span className="menu-name">
          <b>HOME</b>
        </span>
      </Link>
      <Link to="/about">
        <span className="menu-name">
          <b>ABOUT</b>
        </span>
      </Link>
      <Link to="/skills">
        <span className="menu-name">
          <b>SKILLS</b>
        </span>
      </Link>
      <Link to="/project">
        <span className="menu-name">
          <b>PROJECT</b>
        </span>
      </Link>

      <Link to="/contact">
        <span className="menu-name">
          <b>CONTACT</b>
        </span>
      </Link>
    </div>
  );
};

export default Menu;
