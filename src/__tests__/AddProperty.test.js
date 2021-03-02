import React from "react";
import { render } from "@testing-library/react";
import AddProperty from "../components/AddProperty";

describe("AddProperty", () => {
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

  it("renders bedrooms input", () => {
    const { getByTestId } = render(<AddProperty />);
    const bedroomsInput = getByTestId("bedrooms-input");
    expect(bedroomsInput).toBeTruthy();
  });

  it("renders bathrooms input", () => {
    const { getByTestId } = render(<AddProperty />);
    const bathroomsInput = getByTestId("bathrooms-input");
    expect(bathroomsInput).toBeTruthy();
  });

  it("renders price input", () => {
    const { getByTestId } = render(<AddProperty />);
    const priceInput = getByTestId("price-input");
    expect(priceInput).toBeTruthy();
  });

  it("renders city dropdown list", () => {
    const { getByTestId } = render(<AddProperty />);
    const cityDropdown = getByTestId("city-dropdown");
    expect(cityDropdown).toBeTruthy();
  });

  it("renders contact email input", () => {
    const { getByTestId } = render(<AddProperty />);
    const emailInput = getByTestId("email-input");
    expect(emailInput).toBeTruthy();
  });
});
