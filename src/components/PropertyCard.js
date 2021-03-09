import React from "react";
import PropTypes from "prop-types";
import "../styles/PropertyCard.css";

const PropertyCard = (props) => {
  const {
    _id,
    title,
    type,
    bedrooms,
    bathrooms,
    price,
    city,
    email,
    userId,
    onSaveProperty,
  } = props;

  return (
    <div className="property-card">
      <div className="property-card-title">{title}</div>
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
      <div className="property-card-city">{city}</div>
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
  type: PropTypes.string.isRequired,
  bedrooms: PropTypes.string.isRequired,
  bathrooms: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  onSaveProperty: PropTypes.func.isRequired,
};

export default PropertyCard;
