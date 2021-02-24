import React from "react";
import "../styles/NavBar.css";
import logo from "../images/logo.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="Logo" data-testid="logo" />
      <div className="navbar-links">
        <ul>
          <li className="navbar-links-item" data-testid="nav-link-1">
            <a href="www.google.com">View properties</a>
          </li>
          <li className="navbar-links-item" data-testid="nav-link-2">
            <a href="www.google.com">Add a property</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
