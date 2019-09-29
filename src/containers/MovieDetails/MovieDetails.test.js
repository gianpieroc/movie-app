import React from "react";
import { fireEvent } from "@testing-library/react";
import { renderWithRedux } from "../../utils/test-renderer.js";
import MovieDetails from "./MovieDetails.jsx";

describe("Movie Details Container", () => {
  it("can render with redux with defaults", () => {
    const { getByTestId, store } = renderWithRedux(<MovieDetails />, {
      url: "/movie/429617"
    });
    console.log(store);
    expect(getByTestId("go-back-button").textContent).toBe("☇ Go back");
  });
});
