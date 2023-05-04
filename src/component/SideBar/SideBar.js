import React from "react";
import "./SideBar.css";
import closeBtn from "../../images/icon-menu-close.svg";

const SideBar = ({ showsidebar, closesidebar }) => {
  return (
    <aside className={showsidebar ? "sidebar show-sidebar" : "sidebar"}>
      <div className="mobile-links">
        <div className="close-btn" onClick={closesidebar}>
          <img src={closeBtn} alt="close button" aria-hidden="true" />
        </div>

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
    </aside>
  );
};

export default SideBar;
