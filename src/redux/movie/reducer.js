import * as ActionTypes from "../actionTypes";

const initialState = {
  isLoading: false,
  error: null,
  movieList: [],
  searchMoviesHistory: [],
  movieSelected: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.START_SEARCH_MOVIE:
    case ActionTypes.START_GET_MOVIE_BY_ID:
    case ActionTypes.START_GET_MOVIES:
      return {
        ...state,
        searchMoviesHistory: [],
        isLoading: true
      };
    case ActionTypes.FAIL_SEARCH_MOVIE:
    case ActionTypes.FAIL_GET_MOVIE_BY_ID:
    case ActionTypes.FAIL_GET_MOVIES:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case ActionTypes.SUCCESS_GET_MOVIES:
      return {
        ...state,
        movieList: action.payload,
        error: null,
        isLoading: false
      };
    case ActionTypes.SUCCESS_GET_MOVIE_BY_ID:
      return {
        ...state,
        movieSelected: action.payload,
        error: null,
        isLoading: false
      };
    case ActionTypes.SUCCESS_SEARCH_MOVIE:
      return {
        ...state,
        searchMoviesHistory: action.payload,
        error: null,
        isLoading: false
      };
    default:
      return state;
  }
};
