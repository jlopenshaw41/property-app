import React from "react";
import PropTypes from "prop-types";

const PropertyCard = (props) => {
  const { title, type, bedrooms, bathrooms, price, city, email } = props;
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
    </div>
  );
};

PropertyCard.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  bedrooms: PropTypes.number.isRequired,
  bathrooms: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default PropertyCard;
