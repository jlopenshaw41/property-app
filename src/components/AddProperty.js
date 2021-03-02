import React, { useState } from "react";
import "../styles/AddProperty.css";

const AddProperty = () => {
  const initialState = { fields: { title: "", city: "Manchester" } };
  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (event) => {
    event.preventDefault();
    console.log(fields);
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
      <form onSubmit={handleAddProperty}>
        <div>
          <label htmlFor="title">
            Property title:
            <input
              data-testid="property-title-input"
              type="text"
              name="title"
              id="title"
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
        <button type="submit" data-testid="submit-button">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProperty;
