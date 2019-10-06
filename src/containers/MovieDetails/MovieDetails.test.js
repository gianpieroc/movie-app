import React from "react";
import MockAdapter from "axios-mock-adapter";
import { waitForElement, cleanup } from "@testing-library/react";
import { axiosInstance } from "../../utils/api";
import { createMemoryHistory } from "history";

import { renderWithRedux } from "../../utils/test-renderer.js";
import MovieDetails from "./MovieDetails.jsx";
import movieMocked from "../../utils/__mocks__/movie";

const mock = new MockAdapter(axiosInstance);

describe("MovieDetails Container", () => {
  beforeEach(mock.reset);

  afterEach(cleanup);

  it("can render movie details", async () => {
    // GIVEN
    mock.onGet("/movie/429617").reply(200, movieMocked);
    const history = createMemoryHistory();

    // WHEN
    const { getByText, getByTestId } = renderWithRedux(
      <MovieDetails
        match={{ params: { movieId: "429617" } }}
        history={history}
      />,
      {
        route: "/movie/429617"
      }
    );

    // THEN
    await waitForElement(() => getByText("Spider-Man: Far from Home"));
    expect(getByTestId("go-back-button")).toBeDefined();
    expect(getByTestId("movie-details-429617")).toBeDefined();
  });
});
