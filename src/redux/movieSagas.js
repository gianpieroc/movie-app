import { call, put, delay } from "redux-saga/effects";
import {
  successGetMovieById,
  successGetMovies,
  successSearchMovie,
  failGetMovieById,
  failGetMovies,
  failSearchMovie
} from "./actions";
import { getMovieByIdApi, getMoviesApi, searchMovieApi } from "../utils/api";

export function* getMovies() {
  try {
    const response = yield call(getMoviesApi);

    if (!response || !response.data) {
      throw new Error(response.problem);
    }

    yield put(successGetMovies(response.data.results));
  } catch (e) {
    console.log(e);
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
    console.log(e);
    yield put(failGetMovieById(e));
  }
}

export function* searchMovie({ payload }) {
  try {
    yield delay(300);
    const query = payload;
    const response = yield call(searchMovieApi, query);

    if (!response || !response.data) {
      throw new Error(response.problem);
    }

    yield put(successSearchMovie(response.data.results));
  } catch (e) {
    console.log(e);
    yield put(failSearchMovie(e));
  }
}
