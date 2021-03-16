import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledAlert = styled.div`
  background-color: rgba(255, 255, 255, 0.85);
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px;
  width: 100%;
`;

const Alert = ({ message, success }) => {
  if (!message) return null;

  return (
    <StyledAlert className={`Alert alert-${success ? "success" : "error"}`}>
      {message}
    </StyledAlert>
  );
};

Alert.defaultProps = {
  success: false,
};

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  success: PropTypes.bool,
};

export default Alert;
