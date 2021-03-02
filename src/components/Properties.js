import React from "react";
import PropertyCard from "./PropertyCard";

const Properties = () => {
  return (
    <div>
      Properties page
      <PropertyCard
        title="Example property text"
        type="Cottage"
        bathrooms={2}
        bedrooms={3}
        price={300000}
        city="Manchester"
        email="email@address.com"
      />
    </div>
  );
};

export default Properties;
