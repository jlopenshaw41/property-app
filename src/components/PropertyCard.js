import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Email, Star } from "@styled-icons/material";

const StyledPropertyCard = styled.div`
  width: 190px;
  height: 310px;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  position: relative;
  font-weight: 300;
  letter-spacing: 0.05em;
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
  bottom: 0;
  right: 0;
  align-self: flex-end;
`;

const StarIcon = styled(Star)`
  color: #404040;
  height: 20px;
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
`;

const PropertyCard = (props) => {
  const {
    _id,
    title,
    image,
    type,
    bedrooms,
    bathrooms,
    price,
    region,
    email,
    userId,
    onSaveProperty,
  } = props;

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
          <StyledButton type="button" onClick={() => onSaveProperty(_id)}>
            <StarIcon />
          </StyledButton>
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
