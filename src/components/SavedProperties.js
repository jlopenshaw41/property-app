import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import PropTypes from "prop-types";
import Alert from "./Alert";

const ImgContainer = styled.div``;

const StyledImg = styled.img`
  width: 175px;
  height: 125px;
  object-fit: cover;
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
  }, []);

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
    <div className="saved-properties">
      {savedProperties.map((property) => {
        return (
          <div
            className="saved-property-card"
            key={property.propertyListing._id}
          >
            <ImgContainer>
              <StyledImg src={property.propertyListing.image} alt="" />
            </ImgContainer>
            <div className="saved-property-card-title">
              {property.propertyListing.title}
            </div>
            <div className="saved-property-card-type">
              {property.propertyListing.type}
            </div>
            <div className="saved-property-card-bedrooms">
              {property.propertyListing.bedrooms}
            </div>
            <div className="saved-property-card-bathrooms">
              {property.propertyListing.bathrooms}
            </div>
            <div className="saved-property-card-price">
              {property.propertyListing.price}
            </div>
            <div className="saved-property-card-region">
              {property.propertyListing.region}
            </div>
            <div className="saved-property-card-email">
              <a href={`mailto:${property.propertyListing.email}`}>
                {property.propertyListing.email}
              </a>
            </div>
            <div className="remove-favourite-button">
              <button
                type="button"
                onClick={() => handleRemoveFavourite(property._id)}
              >
                Remove from saved properties
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

SavedProperties.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default SavedProperties;
