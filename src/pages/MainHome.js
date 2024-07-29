import React from "react";
import SideNav from "./SideNav";
import "./home.css";
const MainHome = () => {
  return (
    <>
      <div className="main-page-container">
        <SideNav />
        <div className="main-page-content">
          <img src="github-logo.png"></img>
          <h1>MainHome page</h1>
        </div>
      </div>
    </>
  );
};

export default MainHome;
