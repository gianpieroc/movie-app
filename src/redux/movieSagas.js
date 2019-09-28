import { call, put } from "redux-saga/effects";
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

    if (!response) {
      throw new Error(response.problem);
    }

    yield put(successGetMovies(response));
  } catch (e) {
    console.log(e);
    yield put(failGetMovies(e));
  }
}

export function* getMovieById({ payload }) {
  try {
    const { movieId } = payload;
    const response = yield call(getMovieByIdApi, movieId);

    if (!response) {
      throw new Error(response.problem);
    }

    yield put(successGetMovieById(response));
  } catch (e) {
    console.log(e);
    yield put(failGetMovieById(e));
  }
}

export function* searchMovie({ payload }) {
  try {
    const { movieSearchText } = payload;
    const response = yield call(searchMovieApi, movieSearchText);

    if (!response) {
      throw new Error(response.problem);
    }

    yield put(successSearchMovie(response));
  } catch (e) {
    console.log(e);
    yield put(failSearchMovie(e));
  }
}
