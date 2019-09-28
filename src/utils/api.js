import axios from "axios";

const params = { api_key: "fd6b754c480c6fda64edeba8f043fa46" };

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  timeout: 1000
});

export const getMoviesApi = () =>
  axiosInstance.get("/discover/movie?sort_by=popularity.desc", { params });

export const searchMovieApi = query =>
  axiosInstance.get("/search", {}, { params, query });

export const getMovieByIdApi = query =>
  axiosInstance.get("/find", {}, { params, query });
