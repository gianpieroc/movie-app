import React from "react";
import { Link } from "react-router-dom";
import { MovieCardContainer, MovieCardImage } from "./MovieCard.styled";
import { TMD_IMG_URL } from "../../constants";

const MovieCard = ({ movie }) => (
  <Link to={"/movie/" + movie.id}>
    <MovieCardContainer>
      <MovieCardImage src={TMD_IMG_URL + movie.poster_path} />
      <h1>{movie.title}</h1>
      <p>☆ {movie.vote_average}</p>
    </MovieCardContainer>
  </Link>
);

export default MovieCard;
