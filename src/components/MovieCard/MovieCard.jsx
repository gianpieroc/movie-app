import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {MovieCardContainer, MovieCardImage} from "./MovieCard.styled";
import {TMD_IMG_URL} from "../../constants";

const MovieCard = ({movie}) => (
  <Link data-testid={movie.id} to={"/movie/" + movie.id}>
    <MovieCardContainer>
      <MovieCardImage src={TMD_IMG_URL + movie.poster_path} />
      <h1>{movie.title}</h1>
      <p>☆ {movie.vote_average}</p>
    </MovieCardContainer>
  </Link>
);

MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    vote_average: PropTypes.number,
    id: PropTypes.number
  }).isRequired
};

export default MovieCard;
