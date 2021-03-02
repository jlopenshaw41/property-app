import React from "react";
import { render } from "@testing-library/react";
import AddProperty from "../components/AddProperty";

describe("Properties", () => {
  it("renders as expected", () => {
    const { asFragment } = render(<AddProperty />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders a submit button", () => {
    const { getByTestId } = render(<AddProperty />);
    const submitButton = getByTestId("submit-button");
    expect(submitButton).toBeTruthy();
  });

  it("renders property title input", () => {
    const { getByTestId } = render(<AddProperty />);
    const propertyTitleInput = getByTestId("property-title-input");
    expect(propertyTitleInput).toBeTruthy();
  });

  it("renders type dropdown list", () => {
    const { getByTestId } = render(<AddProperty />);
    const typeDropdown = getByTestId("type-dropdown");
    expect(typeDropdown).toBeTruthy();
  });

  it("renders city dropdown list", () => {
    const { getByTestId } = render(<AddProperty />);
    const cityDropdown = getByTestId("city-dropdown");
    expect(cityDropdown).toBeTruthy();
  });
});
