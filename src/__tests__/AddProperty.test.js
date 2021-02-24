import React from "react";
import { render } from "@testing-library/react";
import AddProperty from "../components/AddProperty";

describe("Properties", () => {
  it("renders as expected", () => {
    const { asFragment } = render(<AddProperty />);
    expect(asFragment()).toMatchSnapshot();
  });
});
