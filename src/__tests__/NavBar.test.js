import React from "react";
import { render } from "@testing-library/react";
import NavBar from "../components/NavBar";

describe("NavBar", () => {
  it("renders as expected", () => {
    const { asFragment } = render(<NavBar />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders logo", () => {
    const { getByTestId } = render(<NavBar />);
    const logo = getByTestId("logo");
    expect(logo).toBeTruthy();
  });

  it("renders nav links", () => {
    const { getByTestId } = render(<NavBar />);
    const navLink1 = getByTestId("nav-link-1");
    const navLink2 = getByTestId("nav-link-2");
    expect(navLink1).toBeTruthy();
    expect(navLink2).toBeTruthy();
  });
});
