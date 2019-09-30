import React from "react";
import { renderWithRedux } from "../utils/test-renderer.js";
import { cleanup } from "@testing-library/react";
import App from "./App.jsx";

describe("App Container", () => {
  afterEach(cleanup);
  it("can render Menu", () => {
    const { getByTestId } = renderWithRedux(<App />);
    expect(getByTestId("menu-container")).toBeDefined();
  });
  it("can render Spinner", () => {
    const { getByTestId } = renderWithRedux(<App />);
    expect(getByTestId("spinner-container")).toBeDefined();
  });
});
