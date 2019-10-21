import { takeLatest, all } from "redux-saga/effects";

import {
  START_GET_MOVIES,
  START_GET_MOVIE_BY_ID,
  START_SEARCH_MOVIE
} from "./actionTypes";

import { getMovies, searchMovie, getMovieById } from "./movie/sagas";

export default function* rootSaga() {
  yield all([takeLatest(START_GET_MOVIES, getMovies)]);
  yield all([takeLatest(START_SEARCH_MOVIE, searchMovie)]);
  yield all([takeLatest(START_GET_MOVIE_BY_ID, getMovieById)]);
}
