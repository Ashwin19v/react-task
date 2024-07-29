import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
const Header = () => {
  return (
    <div>
      <div className="header-navbar">
        <div className="header-logo">Todo-fy </div>
        <ul>
          <li>
            <a>
              <Link to={"/"}>Home</Link>
            </a>
          </li>
          <li>
            <a>
              <Link to={"/login"}>Login</Link>
            </a>
          </li>
          <li>
            <a>
              <Link to={"/register"}>Register</Link>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
