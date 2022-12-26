import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "./Menu";
import "../scss/Root.scss";

const Root = () => {
  return (
    <div className="root-contatiner">
      <Menu />
      <Outlet />
    </div>
  );
};

export default Root;
