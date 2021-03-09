import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import FacebookLogin from "react-facebook-login";
import PropTypes from "prop-types";
import logo from "../images/logo.png";

const NavBar = ({ onLogin, userId, onLogout }) => {
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
          {userId && (
            <li className="navbar-links-item" data-testid="nav-link-2">
              <Link className="link" to="/saved-properties">
                Saved properties
              </Link>
            </li>
          )}
          <li className="navbar-links-item" data-testid="nav-link-3">
            <Link className="link" to="/add-property">
              Add a property
            </Link>
          </li>
        </ul>
        {userId ? (
          <button type="button" onClick={onLogout}>
            Sign out
          </button>
        ) : (
          <FacebookLogin
            appId="157885659499807"
            fields="name,email,picture"
            callback={onLogin}
            cssClass="my-facebook-button-class"
            icon="fa-facebook"
          />
        )}
      </div>
    </div>
  );
};

NavBar.propTypes = {
  onLogin: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default NavBar;
