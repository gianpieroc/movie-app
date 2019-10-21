import * as ActionTypes from "../actionTypes";

export const startSearchMovie = payload => ({
  type: ActionTypes.START_SEARCH_MOVIE,
  payload
});

export const successSearchMovie = payload => ({
  type: ActionTypes.SUCCESS_SEARCH_MOVIE,
  payload
});

export const failSearchMovie = payload => ({
  type: ActionTypes.FAIL_SEARCH_MOVIE,
  payload
});

export const startGetMovies = payload => ({
  type: ActionTypes.START_GET_MOVIES,
  payload
});

export const successGetMovies = payload => ({
  type: ActionTypes.SUCCESS_GET_MOVIES,
  payload
});

export const failGetMovies = payload => ({
  type: ActionTypes.FAIL_GET_MOVIES,
  payload
});

export const startGetMovieById = payload => ({
  type: ActionTypes.START_GET_MOVIE_BY_ID,
  payload
});

export const successGetMovieById = payload => ({
  type: ActionTypes.SUCCESS_GET_MOVIE_BY_ID,
  payload
});

export const failGetMovieById = payload => ({
  type: ActionTypes.FAIL_GET_MOVIE_BY_ID,
  payload
});
