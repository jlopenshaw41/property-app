import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import logo from "../images/logo.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="Logo" data-testid="logo" />
      <div className="navbar-links">
        <ul>
          <li className="navbar-links-item" data-testid="nav-link-1">
            <Link className="link" to="/">
              View properties
            </Link>
          </li>
          <li className="navbar-links-item" data-testid="nav-link-2">
            <Link className="link" to="/add-property">
              Add a property
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
