import React from "react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { waitForElement, cleanup } from "@testing-library/react";
import { createMemoryHistory } from "history";

import { renderWithRedux } from "../../utils/test-renderer.js";
import MovieDetails from "./MovieDetails.jsx";

import movieMocked from "../../utils/__mocks__/movie";

var mock = new MockAdapter(axios);

describe("MovieDetails Container", () => {
  afterEach(cleanup);
  it("can render movie details", async () => {
    mock.onGet("/find/429617").reply(200, movieMocked);

    const history = createMemoryHistory();
    const { getByText, getByTestId } = renderWithRedux(
      <MovieDetails
        match={{ params: { movieId: "429617" } }}
        history={history}
      />,
      {
        route: "/movie/429617"
      }
    );
    await waitForElement(() => getByText("Spider-Man: Far from Home"));
    expect(getByTestId("go-back-button")).toBeDefined();
    expect(getByTestId("movie-details-429617")).toBeDefined();
  });
});
