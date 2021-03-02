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
});
