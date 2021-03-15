import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Alert from "./Alert";

const AddPropertyContainer = styled.div`
  background-image: url("https://i.imgur.com/rIGtW0C.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 55px;
  padding: 100px;
`;

const AlertContainer = styled.div`
  border: 1px solid red;
  width: 50%;
  padding: 50px;
  height: 25px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.85);
  padding: 50px;
  width: 50%;
  height: 60%;
`;

const StyledHeading = styled.h1`
  font-weight: 400;
  letter-spacing: 0.05em;
  margin: 0;
  width: 90%;
`;

const FormRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
  width: 90%;
`;

const StyledInput = styled.input`
  border-radius: 25px;
  background-color: rgba(255, 255, 255, 0.9);
  border: 1px solid #a9a9a9;
  font-family: "Montserrat", sans-serif;
  font-size: 0.9rem;
  padding: 5px 5px 5px 10px;
  outline: none;
  width: 90%;
`;

const StyledLabel = styled.label`
  width: 75%;
`;

const AddProperty = () => {
  const initialState = {
    fields: {
      bedrooms: 0,
      bathrooms: 0,
      region: "North West",
      image: "",
      email: "",
      price: 0,
      title: "",
      type: "",
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };
  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);

  const handleAddProperty = (event) => {
    event.preventDefault();
    setAlert({ message: "", isSuccess: false });

    axios
      .post("http://localhost:4000/api/v1/PropertyListing", fields)
      .then(() => {
        setAlert({
          message: "Property added.",
          isSuccess: true,
        });
      })
      .catch(() => {
        setAlert({
          message: "Server error. Please try again later",
          isSuccess: false,
        });
      });
  };

  const handleFieldChange = (event) => {
    const { name, value } = event.target;

    setFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  return (
    <AddPropertyContainer className="AddProperty">
      <AlertContainer>
        <Alert message={alert.message} success={alert.isSuccess} />
      </AlertContainer>
      <StyledForm onSubmit={handleAddProperty}>
        <StyledHeading>Add a property</StyledHeading>
        <FormRow>
          <p>Property title:</p>
          <StyledLabel htmlFor="title">
            <StyledInput
              data-testid="property-title-input"
              type="text"
              name="title"
              id="title"
              placeholder="e.g. Detached Georgian farmhouse"
              value={fields.title}
              onChange={handleFieldChange}
            />
          </StyledLabel>
        </FormRow>
        <FormRow>
          <p>Image URL:</p>
          <StyledLabel htmlFor="image">
            <StyledInput
              type="text"
              name="image"
              id="image"
              placeholder="enter image url"
              value={fields.image}
              onChange={handleFieldChange}
            />
          </StyledLabel>
        </FormRow>
        <FormRow>
          <p>Property type:</p>
          <StyledLabel htmlFor="type">
            <select
              data-testid="type-dropdown"
              id="type"
              name="type"
              value={fields.type}
              onChange={handleFieldChange}
            >
              <option value="Apartment">Apartment</option>
              <option value="Villa">Villa</option>
              <option value="Mansion">Mansion</option>
              <option value="House">House</option>
              <option value="Semi-detached house">Semi-detached house</option>
              <option value="Terraced house">Terraced house</option>
              <option value="Castle">Castle</option>
              <option value="Cottage">Cottage</option>
            </select>
          </StyledLabel>
        </FormRow>
        <FormRow>
          <p>Bedrooms:</p>
          <StyledLabel htmlFor="bedrooms">
            <StyledInput
              data-testid="bedrooms-input"
              type="number"
              id="bedrooms"
              name="bedrooms"
              value={fields.bedrooms}
              onChange={handleFieldChange}
              min="0"
            />
          </StyledLabel>
        </FormRow>
        <FormRow>
          <p>Bathrooms:</p>
          <StyledLabel htmlFor="bathrooms">
            <StyledInput
              data-testid="bathrooms-input"
              type="number"
              id="bathrooms"
              name="bathrooms"
              value={fields.bathrooms}
              onChange={handleFieldChange}
              min="0"
            />
          </StyledLabel>
        </FormRow>
        <FormRow>
          <p>Price (£):</p>
          <StyledLabel htmlFor="price">
            <StyledInput
              data-testid="price-input"
              type="number"
              id="price"
              name="price"
              value={fields.price}
              onChange={handleFieldChange}
              min="0"
            />
          </StyledLabel>
        </FormRow>
        <FormRow>
          <p>Region:</p>
          <StyledLabel htmlFor="region">
            <select
              id="region"
              name="region"
              value={fields.region}
              onChange={handleFieldChange}
            >
              <option value="North West">North West</option>
              <option value="North East">North East</option>
              <option value="Midlands">Midlands</option>
              <option value="East">East</option>
              <option value="South East"> South East</option>
              <option value="South West">South West</option>
            </select>
          </StyledLabel>
        </FormRow>
        <FormRow>
          <p>Contact email:</p>
          <StyledLabel htmlFor="email">
            <StyledInput
              data-testid="email-input"
              type="email"
              id="email"
              name="email"
              placeholder="e.g. name@email.co.uk"
              value={fields.email}
              onChange={handleFieldChange}
            />
          </StyledLabel>
        </FormRow>
        <button type="submit" data-testid="submit-button">
          Add
        </button>
      </StyledForm>
    </AddPropertyContainer>
  );
};

export default AddProperty;
