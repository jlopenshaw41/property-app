import React from "react";
import PropTypes from "prop-types";
import "../styles/PropertyCard.css";
import styled from "styled-components";

const ImgContainer = styled.div``;

const StyledImg = styled.img`
  width: 175px;
  height: 125px;
  object-fit: cover;
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
    <div className="property-card">
      <ImgContainer>
        <StyledImg src={image} alt="" />
      </ImgContainer>
      <div className="property-card-title">{title}/</div>
      <div className="property-card-type">{type}</div>
      <div
        className="property-card-bedrooms"
        data-testid="property-card-bedrooms"
      >
        {bedrooms}
      </div>
      <div
        className="property-card-bathrooms"
        data-testid="property-card-bathrooms"
      >
        {bathrooms}
      </div>
      <div className="property-card-price" data-testid="property-card-price">
        {price}
      </div>
      <div className="property-card-region">{region}</div>
      <div className="property-card-email">
        <a href={`mailto:${email}`}>{email}</a>
      </div>
      {userId && (
        <div className="save-button">
          <button type="button" onClick={() => onSaveProperty(_id)}>
            Save
          </button>
        </div>
      )}
    </div>
  );
};

PropertyCard.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  bedrooms: PropTypes.string.isRequired,
  bathrooms: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  onSaveProperty: PropTypes.func.isRequired,
};

export default PropertyCard;
