import React from "react";
import { Link } from "react-router-dom";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FacebookF } from "@styled-icons/fa-brands";

const NavContainer = styled.div`
  background-color: white;
  border-bottom: 1px solid gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
`;

const Logo = styled.h1`
  font-size: 1.3rem;
  margin-left: 10px;
`;

const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
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
  color: #404040;
  font-weight: 350;
  letter-spacing: 0.05em;
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
  padding: 8px;
`;

const FacebookIcon = styled(FacebookF)`
  height: 1.1rem;
  padding-bottom: 3px;
  margin-right: 8px;
  margin-left: 5px;
  color: white;
`;

const NavBar = ({ onLogin, userId, onLogout }) => {
  return (
    <NavContainer>
      <StyledLink className="link" to="/">
        <Logo>Maison</Logo>
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
