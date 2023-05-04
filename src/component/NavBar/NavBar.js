import React from "react";
import logo from "../../images/logo.svg";
import "./NavBar.css";
import menuBtn from "../../images/icon-menu.svg";

const NavBar = ({ opensidebar }) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" aria-hidden="true" />
      </div>

      <div className="web-links">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">New</a>
          </li>
          <li>
            <a href="/">Popular</a>
          </li>
          <li>
            <a href="/">Trending</a>
          </li>
          <li>
            <a href="/">Categories</a>
          </li>
        </ul>
      </div>

      <div className="menu-icon" onClick={opensidebar}>
        <img src={menuBtn} alt="menu button" aria-hidden="true" />
      </div>
    </nav>
  );
};

export default NavBar;
