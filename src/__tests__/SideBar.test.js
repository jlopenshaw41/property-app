import React from "react";
import { render } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import SideBar from "../components/SideBar";

describe("SideBar", () => {
  it("renders as expected", () => {
    const history = createMemoryHistory();
    const { asFragment } = render(
      <Router history={history}>
        <SideBar />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
