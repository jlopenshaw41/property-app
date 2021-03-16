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
  padding: 25px 100px;
`;

const AlertContainer = styled.div`
  display: flex;
  width: 50%;
  padding: 50px 0px;
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
  min-height: 560px;
`;

const StyledHeading = styled.h1`
  font-weight: 400;
  letter-spacing: 0.05em;
  margin-top: 0;
  margin-bottom: 15px;
  width: 90%;
`;

const FormRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px 0;
  width: 90%;
`;

const StyledInput = styled.input`
  border-radius: 5px;
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

const StyledDropdown = styled.select`
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.9);
  border: 1px solid #a9a9a9;
  font-family: "Montserrat", sans-serif;
  font-size: 0.9rem;
  padding: 5px 5px 5px 10px;
  outline: none;
  width: 94%;
`;

const StyledParagraph = styled.p`
  margin: 0px;
`;

const AddPropertyButton = styled.button`
  border: 1px solid #404040;
  background-color: white;
  color: #404040;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  font-weight: 300;
  margin: 10px;
  padding: 8px;
  width: 25%;
  min-width: 126px;
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
          message: "Property added",
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
          <StyledParagraph>Property title:</StyledParagraph>
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
          <StyledParagraph>Image URL:</StyledParagraph>
          <StyledLabel htmlFor="image">
            <StyledInput
              type="text"
              name="image"
              id="image"
              placeholder="e.g. https://i.imgur.com/rIGtW0C.jpg"
              value={fields.image}
              onChange={handleFieldChange}
            />
          </StyledLabel>
        </FormRow>
        <FormRow>
          <StyledParagraph>Property type:</StyledParagraph>
          <StyledLabel htmlFor="type">
            <StyledDropdown
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
            </StyledDropdown>
          </StyledLabel>
        </FormRow>
        <FormRow>
          <StyledParagraph>Bedrooms:</StyledParagraph>
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
          <StyledParagraph>Bathrooms:</StyledParagraph>
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
          <StyledParagraph>Price (£):</StyledParagraph>
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
          <StyledParagraph>Region:</StyledParagraph>
          <StyledLabel htmlFor="region">
            <StyledDropdown
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
            </StyledDropdown>
          </StyledLabel>
        </FormRow>
        <FormRow>
          <StyledParagraph>Contact email:</StyledParagraph>
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
        <AddPropertyButton type="submit" data-testid="submit-button">
          Add property
        </AddPropertyButton>
      </StyledForm>
    </AddPropertyContainer>
  );
};

export default AddProperty;
