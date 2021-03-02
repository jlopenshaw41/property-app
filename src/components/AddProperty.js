import React, { useState } from "react";
import "../styles/AddProperty.css";
import axios from "axios";
import Alert from "./Alert";

const AddProperty = () => {
  const initialState = {
    fields: {
      bedrooms: 0,
      bathrooms: 0,
      city: "Manchester",
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
    <div className="AddProperty">
      <Alert message={alert.message} success={alert.isSuccess} />
      <form onSubmit={handleAddProperty}>
        <div>
          <label htmlFor="title">
            Property title:
            <input
              data-testid="property-title-input"
              type="text"
              name="title"
              id="title"
              placeholder="e.g. 5 bedroom detached house for sale"
              value={fields.title}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="type">
            Property type:
            <select
              data-testid="type-dropdown"
              id="type"
              name="type"
              value={fields.type}
              onChange={handleFieldChange}
            >
              <option value="Flat">Flat</option>
              <option value="Detached">Detached</option>
              <option value="Semi-detached">Semi-detached</option>
              <option value="Terraced">Terraced</option>
              <option value="End of terrace">End of terrace</option>
              <option value="Cottage">Cottage</option>
              <option value="Bungalow">Bungalow</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="bedrooms">
            Bedrooms:
            <input
              data-testid="bedrooms-input"
              type="number"
              id="bedrooms"
              name="bedrooms"
              placeholder="0"
              value={fields.bedrooms}
              onChange={handleFieldChange}
              min="0"
            />
          </label>
        </div>
        <div>
          <label htmlFor="bathrooms">
            Bathrooms:
            <input
              data-testid="bathrooms-input"
              type="number"
              id="bathrooms"
              name="bathrooms"
              placeholder="0"
              value={fields.bathrooms}
              onChange={handleFieldChange}
              min="0"
            />
          </label>
        </div>
        <div>
          <label htmlFor="price">
            Price (£):
            <input
              data-testid="price-input"
              type="number"
              id="price"
              name="price"
              placeholder="0"
              value={fields.price}
              onChange={handleFieldChange}
              min="0"
            />
          </label>
        </div>
        <div>
          <label htmlFor="city">
            City:
            <select
              data-testid="city-dropdown"
              id="city"
              name="city"
              value={fields.city}
              onChange={handleFieldChange}
            >
              <option value="Manchester">Manchester</option>
              <option value="Leeds">Leeds</option>
              <option value="Sheffield">Sheffield</option>
              <option value="Liverpool">Liverpool</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="email">
            Contact email:
            <input
              data-testid="email-input"
              type="email"
              id="email"
              name="email"
              placeholder="e.g. name@email.co.uk"
              value={fields.email}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <button type="submit" data-testid="submit-button">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProperty;
