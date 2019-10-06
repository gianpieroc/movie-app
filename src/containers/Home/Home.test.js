import React from "react";
import { renderWithRedux } from "../../utils/test-renderer.js";
import { axiosInstance } from "../../utils/api";
import MockAdapter from "axios-mock-adapter";
import { waitForElement, cleanup } from "@testing-library/react";

import movieListMocked from "../../utils/__mocks__/movieList";
import App from "../App.jsx";

const mock = new MockAdapter(axiosInstance);

describe("App Container", () => {
  afterEach(cleanup);
  it("can render empty Home", () => {
    // WHEN
    const { getByText } = renderWithRedux(<App />);

    // THEN
    expect(getByText("The Movie Database")).toBeDefined();
  });
  it("can render first element of movies", async () => {
    // GIVEN
    mock
      .onGet("/discover/movie?sort_by=popularity.desc")
      .reply(200, movieListMocked);
    // WHEN
    const { getByText, getByTestId } = renderWithRedux(<App />);

    // THEN
    await waitForElement(() => getByText("The Old Man & the Gun"));
    expect(getByText("The Old Man & the Gun")).toBeDefined();
    expect(getByTestId("429203")).toBeDefined();
  });
});
