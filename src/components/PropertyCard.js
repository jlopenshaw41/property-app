import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Email } from "@styled-icons/material";

const StyledPropertyCard = styled.div`
  width: 190px;
  height: 320px;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  position: relative;
  font-weight: 300;
  letter-spacing: 0.05em;
  margin: 10px;
`;

const StyledPropertyTitle = styled.p`
  font-style: italic;
  font-size: 0.9em;
  margin: 10px 10px;
`;

const PropertyCardText = styled.p`
  font-size: 0.9em;
  margin: 2px 10px;
`;

const ImgContainer = styled.div``;

const StyledImg = styled.img`
  width: 190px;
  height: 125px;
  object-fit: cover;
`;

const EmailIcon = styled(Email)`
  height: 20px;
  color: #404040;
`;

const EmailIconContainer = styled.div`
  margin: 10px;
  position: absolute;
  bottom: 0;
`;

const SaveButtonContainer = styled.div`
  margin: 10px 5px;
  position: absolute;
  bottom: 2px;
  right: 3px;
  align-self: flex-end;
`;

const AddToSavedPropertiesButton = styled.a`
  color: #404040;
  font-size: 0.8rem;
  text-decoration: none;
  border: 1px solid #bebebe;
  padding: 3px;
`;

const RemoveFromSavedPropertiesButton = styled.a`
  color: #bebebe;
  font-size: 0.8rem;
  text-decoration: none;
  border: 1px solid #bebebe;
  padding: 3px;
`;

const PropertyCard = (props) => {
  const [favourite, setFavourite] = useState(true);

  const {
    _id,
    title,
    image,
    type,
    bedrooms,
    bathrooms,
    region,
    email,
    userId,
    onSaveProperty,
  } = props;

  let { price } = props;

  const addCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  price = addCommas(price);

  return (
    <StyledPropertyCard className="property-card">
      <ImgContainer>
        <StyledImg src={image} alt="" />
      </ImgContainer>
      <StyledPropertyTitle className="property-card-title">
        {title}
      </StyledPropertyTitle>
      <PropertyCardText className="property-card-type">{type}</PropertyCardText>
      <PropertyCardText
        className="property-card-bedrooms"
        data-testid="property-card-bedrooms"
      >
        {bedrooms} bedrooms
      </PropertyCardText>
      <PropertyCardText
        className="property-card-bathrooms"
        data-testid="property-card-bathrooms"
      >
        {bathrooms} bathrooms
      </PropertyCardText>
      <PropertyCardText
        className="property-card-price"
        data-testid="property-card-price"
      >
        £{price}
      </PropertyCardText>
      <PropertyCardText className="property-card-region">
        {region}
      </PropertyCardText>
      <EmailIconContainer className="property-card-email">
        <a href={`mailto:${email}`}>
          <EmailIcon />
        </a>
      </EmailIconContainer>
      {userId && (
        <SaveButtonContainer className="save-button">
          {favourite ? (
            <AddToSavedPropertiesButton
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onSaveProperty(_id);
                setFavourite(!favourite);
              }}
            >
              Save property
              {/* <StarIconNotFavourite title="Save property" cursor="pointer" /> */}
            </AddToSavedPropertiesButton>
          ) : (
            <RemoveFromSavedPropertiesButton
              href="#"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              {" "}
              Added
              {/* <StarIconFavourite /> */}
            </RemoveFromSavedPropertiesButton>
          )}
        </SaveButtonContainer>
      )}
    </StyledPropertyCard>
  );
};

PropertyCard.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  bedrooms: PropTypes.string.isRequired,
  bathrooms: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  region: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  onSaveProperty: PropTypes.func.isRequired,
};

export default PropertyCard;
