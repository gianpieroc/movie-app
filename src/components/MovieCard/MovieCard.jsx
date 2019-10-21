import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { MovieCardContainer, MovieCardImage } from "./MovieCard.styled";
import { TMD_IMG_URL } from "../../constants";

const notFoundImage =
  "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png";

const MovieCard = ({ movie: { id, poster_path, title, vote_average } }) => {
  const [image, setImage] = useState(TMD_IMG_URL + poster_path);
  const setErrorImage = () => setImage(notFoundImage);

  return (
    <Link data-testid={id} to={"/movie/" + id}>
      <MovieCardContainer>
        <MovieCardImage src={image} onError={setErrorImage} />
        <h1>{title}</h1>
        <p>☆ {vote_average}</p>
      </MovieCardContainer>
    </Link>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    vote_average: PropTypes.number,
    id: PropTypes.number
  }).isRequired
};

export default MovieCard;
