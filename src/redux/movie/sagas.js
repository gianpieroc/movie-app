import { call, put } from "redux-saga/effects";
import {
  successGetMovieById,
  successGetMovies,
  successSearchMovie,
  failGetMovieById,
  failGetMovies,
  failSearchMovie
} from "./actions";
import { getMovieByIdApi, getMoviesApi, searchMovieApi } from "../../utils/api";

export function* getMovies() {
  try {
    const response = yield call(getMoviesApi);

    if (!response || !response.data) {
      throw new Error(response.problem);
    }

    yield put(successGetMovies(response.data.results));
  } catch (e) {
    yield put(failGetMovies(e));
  }
}

export function* getMovieById({ payload }) {
  try {
    const movieId = payload;
    const response = yield call(getMovieByIdApi, movieId);

    if (!response || !response.data) {
      throw new Error(response.problem);
    }

    yield put(successGetMovieById(response.data));
  } catch (e) {
    yield put(failGetMovieById(e));
  }
}

export function* searchMovie({ payload }) {
  try {
    const query = payload;
    const response = yield call(searchMovieApi, query);

    if (!response || !response.data) {
      throw new Error(response.problem);
    }

    yield put(successSearchMovie(response.data.results));
  } catch (e) {
    yield put(failSearchMovie(e));
  }
}
