import React from "react";
import { render } from "@testing-library/react";
import Properties from "../components/Properties";

describe("Properties", () => {
  it("renders as expected", () => {
    const { asFragment } = render(<Properties />);
    expect(asFragment()).toMatchSnapshot();
  });
});
