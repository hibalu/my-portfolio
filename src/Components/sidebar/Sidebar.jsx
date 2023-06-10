import React from "react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <aside className="aside">
      <a href="#home" className="nav-logo">
        <img src="../assets/logo.svg" alt="" />
      </a>

      <nav className="nav">
        <div className="nav_menu">
          <ul className="nav_list">
            <li className="nav_item">
              <a href="#home" className="nav_link">
                <i className="icon-home"></i>
              </a>
            </li>

            <li className="nav_item">
              <a href="#about" className="nav_link">
                <i className="icon-user-following"></i>
              </a>
            </li>

            <li className="nav_item">
              <a href="#services" className="nav_link">
                <i className="icon-briefcase"></i>
              </a>
            </li>

            <li className="nav_item">
              <a href="#contact" className="nav_link">
                <i className="icon-bubble"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="nav_footer">
        <span className="copyright"> @2022-2023</span>
      </div>
    </aside>
  );
};

export default Sidebar;
