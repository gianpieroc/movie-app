import configureStore from "redux-mock-store";
import saga from "redux-saga";
import {
  startGetMovies,
  successGetMovies,
  failGetMovieById,
  failGetMovies
} from "./actions";

const middlewares = [saga];
const mockStore = configureStore(middlewares);

describe("redux movies", () => {
  it("should get movies", async () => {
    const store = mockStore({});
    store.dispatch(startGetMovies());
    return setTimeout(() => {
      const actions = store.getActions();
      console.log(actions);
      expect(actions).toEqual(successGetMovies);
    }, 30);
  });
});
