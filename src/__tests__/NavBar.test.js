import React from "react";
import { render } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import NavBar from "../components/NavBar";

describe("NavBar", () => {
  it("renders as expected", () => {
    const history = createMemoryHistory();
    const { asFragment } = render(
      <Router history={history}>
        <NavBar />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders logo", () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <Router history={history}>
        <NavBar />
      </Router>
    );
    const logo = getByTestId("logo");
    expect(logo).toBeTruthy();
  });

  it("renders nav links", () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <Router history={history}>
        <NavBar />
      </Router>
    );
    const navLink1 = getByTestId("nav-link-1");
    const navLink2 = getByTestId("nav-link-2");
    expect(navLink1).toBeTruthy();
    expect(navLink2).toBeTruthy();
  });
});
