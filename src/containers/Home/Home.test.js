import React from "react";
import { renderWithRedux } from "../../utils/test-renderer.js";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { waitForElement, cleanup } from "@testing-library/react";

import movieListMocked from "../../utils/__mocks__/movieList";
import App from "../App.jsx";

var mock = new MockAdapter(axios);

describe("App Container", () => {
  afterEach(cleanup);
  it("can render Home", () => {
    mock
      .onGet("/discover/movie?sort_by=popularity.desc")
      .reply(200, movieListMocked);
    const { getByText } = renderWithRedux(<App />);
    expect(getByText("The Movie Database")).toBeDefined();
  });
  it("can render first element of movies", async () => {
    const { getByText, getByTestId } = renderWithRedux(<App />);
    await waitForElement(() => getByText("The Old Man & the Gun"));
    expect(getByText("The Old Man & the Gun")).toBeDefined();
    expect(getByTestId("429203")).toBeDefined();
  });
});
