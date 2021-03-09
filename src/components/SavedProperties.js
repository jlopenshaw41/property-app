import React, { useState, useEffect } from "react";
import axios from "axios";
import Alert from "./Alert";

const SavedProperties = () => {
  const [savedProperties, setSavedProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "", isSuccess: true });

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/Favourite?populate=propertyListing")
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
            <div className="saved-property-card-city">
              {property.propertyListing.city}
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

export default SavedProperties;
