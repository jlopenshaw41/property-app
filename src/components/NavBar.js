import React from "react";
import { Link } from "react-router-dom";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Facebook } from "@styled-icons/fa-brands";
import logo from "../images/logo.png";

const NavContainer = styled.div`
  background-color: white;
  border-bottom: 1px solid gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  height: 50px;
`;

const NavList = styled.ul`
  list-style-type: none;
`;

const NavBarLinks = styled.div`
  margin: 0;
  padding: 0;
`;

const NavBarLinksItem = styled.li`
  margin: 0;
  padding: 10px;
  display: inline-block;
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

const StyledButton = styled.button`
  border: none;
  background-color: #4267b2;
  color: white;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  font-weight: 300;
  margin: 10px;
`;

const FacebookIcon = styled(Facebook)`
  height: 16px;
  padding: 2px;
  margin: 2px;
  color: white;
`;

const NavBar = ({ onLogin, userId, onLogout }) => {
  return (
    <NavContainer>
      <StyledLink className="link" to="/">
        <Logo src={logo} alt="Logo" data-testid="logo" />
      </StyledLink>
      <NavBarLinks>
        <NavList>
          <NavBarLinksItem data-testid="nav-link-1">
            <StyledLink className="link" to="/">
              View properties
            </StyledLink>
          </NavBarLinksItem>
          {userId && (
            <NavBarLinksItem data-testid="nav-link-2">
              <StyledLink className="link" to="/saved-properties">
                Saved properties
              </StyledLink>
            </NavBarLinksItem>
          )}
          <NavBarLinksItem data-testid="nav-link-3">
            <StyledLink className="link" to="/add-property">
              Add a property
            </StyledLink>
          </NavBarLinksItem>

          {userId ? (
            <StyledButton type="button" onClick={onLogout}>
              Sign out
            </StyledButton>
          ) : (
            <FacebookLogin
              appId="157885659499807"
              callback={onLogin}
              render={(renderProps) => (
                <StyledButton type="button" onClick={renderProps.onClick}>
                  <FacebookIcon />
                  Login with Facebook
                </StyledButton>
              )}
            />
          )}
        </NavList>
      </NavBarLinks>
    </NavContainer>
  );
};

NavBar.propTypes = {
  onLogin: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default NavBar;
