import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import styled from "styled-components";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import SideBar from "./SideBar";
import Hero from "./Hero";

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

const PropertiesContainer = styled.div`
  display: flex;
`;

const PropertyCardsContainer = styled.div`
  display: flex;
  width: 80%;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 30px;
`;

const Properties = ({ userId }) => {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "", isSuccess: true });

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/PropertyListing")
      .then(({ data }) => {
        setProperties(data);
      })
      .catch(() => {
        setAlert({
          message: "Server error. Please try again later",
          isSuccess: false,
        });
      });
  }, []);

  const { search } = useLocation();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/PropertyListing${search}`)
      .then(({ data }) => {
        setProperties(data);
      })
      .catch(() => {
        setAlert({
          message: "Server error. Please try again later",
          isSuccess: false,
        });
      });
  }, [search]);

  if (alert.message) {
    return <Alert message={alert.message} success={alert.isSuccess} />;
  }

  const handleSaveProperty = (propertyId) => {
    axios.post("http://localhost:4000/api/v1/Favourite", {
      propertyListing: propertyId,
      fbUserId: userId,
    });
  };

  return (
    <Main>
      <Hero />
      <PropertiesContainer className="properties-container">
        <SideBar />
        <PropertyCardsContainer>
          {properties.map((property) => (
            <PropertyCard
              key={property._id}
              _id={property._id}
              title={property.title}
              image={property.image}
              type={property.type}
              bathrooms={property.bathrooms}
              bedrooms={property.bedrooms}
              price={property.price}
              region={property.region}
              email={property.email}
              userId={userId}
              onSaveProperty={handleSaveProperty}
            />
          ))}
        </PropertyCardsContainer>
      </PropertiesContainer>
    </Main>
  );
};

Properties.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default Properties;
