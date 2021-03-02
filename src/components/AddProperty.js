import React from "react";
import "../styles/AddProperty.css";

const AddProperty = () => {
  return (
    <div className="AddProperty">
      <form>
        <button type="submit" data-testId="submit-button">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProperty;
