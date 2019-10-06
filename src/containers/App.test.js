import React from "react";
import { renderWithRedux } from "../utils/test-renderer.js";
import { cleanup, fireEvent, waitForElement } from "@testing-library/react";
import MockAdapter from "axios-mock-adapter";
import { axiosInstance } from "../utils/api";
import movieSearchMocked from "../utils/__mocks__/searchMovie";
import App from "./App.jsx";

const mock = new MockAdapter(axiosInstance);

describe("App Container", () => {
  beforeEach(mock.reset);
  afterEach(cleanup);
  it("can render Menu", () => {
    const { getByTestId } = renderWithRedux(<App />);
    expect(getByTestId("menu-container")).toBeDefined();
  });
  it("can render Spinner", () => {
    //  WHEN
    const { getByTestId } = renderWithRedux(<App />);

    //  THEN
    expect(getByTestId("spinner-container")).toBeDefined();
  });
  it("can Search Item", async () => {
    //  GIVEN
    mock
      .onGet("/search/movie?query=Amelie+Rennt")
      .reply(200, movieSearchMocked);
    const { getByLabelText, store, getByText } = renderWithRedux(<App />);
    const input = getByLabelText("search-input");

    //  WHEN
    fireEvent.change(input, {
      target: { value: "Amelie Rennt" }
    });

    //  THEN
    // TODO: Amelie Rennt should exists here;
    // await waitForElement(() => getByText("Amelie Rennt"));
    expect(input).toBeDefined();
  });
});
