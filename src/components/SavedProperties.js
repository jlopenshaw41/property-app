import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Email, Clear } from "@styled-icons/material";
import Alert from "./Alert";

const SavedPropertiesContainer = styled.div`
  border: 1px solid red;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 30px;
  margin-top: 55px;
`;

const StyledSavedPropertyCard = styled.div`
  width: 190px;
  height: 320px;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  position: relative;
  font-weight: 300;
  letter-spacing: 0.05em;
  margin: 10px;
`;

const ImgContainer = styled.div``;

const StyledImg = styled.img`
  width: 190px;
  height: 125px;
  object-fit: cover;
`;

const StyledSavedPropertyTitle = styled.p`
  font-style: italic;
  font-size: 0.9em;
  margin: 10px 10px;
`;

const StyledPropertyCardText = styled.p`
  font-size: 0.9em;
  margin: 2px 10px;
`;

const EmailIconContainer = styled.div`
  margin: 10px;
  position: absolute;
  bottom: 0;
`;

const EmailIcon = styled(Email)`
  height: 20px;
  color: #404040;
`;

const CrossIcon = styled(Clear)`
  height: 20px;
  color: #404040;
`;

const RemoveSavedPropertyButtonContainer = styled.div`
  margin: 10px 5px;
  position: absolute;
  top: 0;
  right: 0;
`;

const RemoveSavedPropertyButton = styled.button`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.85);
  border: none;
  color: #404040;
  font-family: "Montserrat", sans-serif;
  font-size: 0.6rem;
  font-weight: 350;
  letter-spacing: 0.05em;
  padding: 3px;
  text-align: left;
  text-decoration: none;
  pointer: cursor;
`;

const SavedProperties = ({ userId }) => {
  const [savedProperties, setSavedProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "", isSuccess: true });

  useEffect(() => {
    axios
      .get(
        `http://localhost:4000/api/v1/Favourite?query={"fbUserId":"${userId}"}&populate=propertyListing`
      )
      .then(({ data }) => {
        setSavedProperties(data);
      })
      .catch(() => {
        setAlert({
          message: "Server error. Please try again later",
          isSuccess: false,
        });
      });
  }, [userId]);

  const handleRemoveFavourite = (favouriteId) => {
    axios
      .delete(`http://localhost:4000/api/v1/Favourite/${favouriteId}`)
      .catch(() => {
        setAlert({
          message: "Server error. Please try again later",
          isSuccess: false,
        });
      });
  };

  if (alert.message) {
    return <Alert message={alert.message} success={alert.isSuccess} />;
  }

  return (
    <SavedPropertiesContainer className="saved-properties">
      {savedProperties.map((property) => {
        return (
          <StyledSavedPropertyCard
            className="saved-property-card"
            key={property.propertyListing._id}
          >
            <ImgContainer>
              <StyledImg src={property.propertyListing.image} alt="" />
            </ImgContainer>
            <StyledSavedPropertyTitle className="saved-property-card-title">
              {property.propertyListing.title}
            </StyledSavedPropertyTitle>
            <StyledPropertyCardText className="saved-property-card-type">
              {property.propertyListing.type}
            </StyledPropertyCardText>
            <StyledPropertyCardText className="saved-property-card-bedrooms">
              {property.propertyListing.bedrooms} bedrooms
            </StyledPropertyCardText>
            <StyledPropertyCardText className="saved-property-card-bathrooms">
              {property.propertyListing.bathrooms} bathrooms
            </StyledPropertyCardText>
            <StyledPropertyCardText className="saved-property-card-price">
              £{property.propertyListing.price}
            </StyledPropertyCardText>
            <StyledPropertyCardText className="saved-property-card-region">
              {property.propertyListing.region}
            </StyledPropertyCardText>
            <EmailIconContainer className="saved-property-card-email">
              <a href={`mailto:${property.propertyListing.email}`}>
                <EmailIcon />
              </a>
            </EmailIconContainer>
            <RemoveSavedPropertyButtonContainer className="remove-favourite-button">
              <RemoveSavedPropertyButton
                type="button"
                onClick={() => handleRemoveFavourite(property._id)}
              >
                <CrossIcon title="Remove saved property" />
              </RemoveSavedPropertyButton>
            </RemoveSavedPropertyButtonContainer>
          </StyledSavedPropertyCard>
        );
      })}
    </SavedPropertiesContainer>
  );
};

SavedProperties.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default SavedProperties;
