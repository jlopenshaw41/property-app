import React from "react";
import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import App from "../components/App";

describe("App", () => {
  it("renders as expected", () => {
    const history = createMemoryHistory();
    const { asFragment } = render(
      <Router history={history}>
        <App />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders property app text", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <App />
      </Router>
    );
    const appName = screen.getByText("Property App");
    expect(appName).toBeInTheDocument();
  });
});
