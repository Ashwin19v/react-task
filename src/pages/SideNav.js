import React from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
import "./header.css";
const SideNav = () => {
  return (
    <>
      <div className="side-nav-container">
        <div className="side-nav-header">
          <img src={logo} />
          <h2>Todo-fy</h2>
        </div>
        <div className="side-nav-bottom"></div>
        <div className="side-nav-content">
          <ul>
            <li>
              <a>
                <Link to={"/dashboard"}>DASHBOARD</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to={"/important"}>IMPORTANT TASKS!</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to={"/ongoing"}>ONGOING TASKS</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to={"/completed"}>COMPLETED TASKS</Link>
              </a>
            </li>
          </ul>
        </div>
        <div className="side-nav-footer">
          <img src="github-logo.png"></img>
          <button>
            <a>
              <Link to={"/"}>LOGOUT</Link>
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default SideNav;
