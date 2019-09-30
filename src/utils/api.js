import axios from "axios";

const params = { api_key: process.env.REACT_APP_MOVIE_DB_KEY };

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  timeout: 1000
});

export const getMoviesApi = () =>
  axiosInstance.get("/discover/movie?sort_by=popularity.desc", { params });

export const searchMovieApi = query => {
  return axiosInstance.get("/search/movie", { params: { ...params, query } });
};

export const getMovieByIdApi = query =>
  axiosInstance.get("/movie/" + query, { params });
