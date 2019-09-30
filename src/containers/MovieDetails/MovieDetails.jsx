import React, { useEffect } from "react";
import { connect } from "react-redux";
import { movieSelectedSelector } from "../../redux/selectors";
import { startGetMovieById } from "../../redux/actions";
import {
  MovieDetailsContainer,
  MovieDetailsImage,
  MovieDetailsTitle,
  MovieDetailsDescription,
  MovieDetailsContent,
  MovieDetailsRow,
  MovieDetailsButton
} from "./MovieDetails.styled";
import { TMD_IMG_URL } from "../../constants";
import Label from "../../components/Label/Label";

const MovieDetails = ({
  getMovie,
  movie,
  match: {
    params: { movieId }
  },
  history: { goBack }
}) => {
  useEffect(() => {
    getMovie(movieId);
  }, [getMovie, movieId]);

  if (!movie || !movie.title) {
    return null;
  }

  const back = () => {
    goBack();
  };

  const {
    poster_path,
    title,
    genres,
    status,
    vote_average,
    overview,
    id
  } = movie;

  return (
    <MovieDetailsContainer data-testid={"movie-details-" + id}>
      <MovieDetailsButton data-testid="go-back-button" onClick={back}>
        ☇ Go Back
      </MovieDetailsButton>
      <MovieDetailsImage src={TMD_IMG_URL + poster_path} />
      <MovieDetailsContent>
        <MovieDetailsTitle>{title}</MovieDetailsTitle>
        <MovieDetailsRow>
          {genres &&
            genres.map(({ name, id }) => <Label key={id}>{name}</Label>)}
        </MovieDetailsRow>
        <MovieDetailsDescription>{status}</MovieDetailsDescription>
        <MovieDetailsDescription>☆ {vote_average}</MovieDetailsDescription>
        <MovieDetailsDescription>{overview}</MovieDetailsDescription>
      </MovieDetailsContent>
    </MovieDetailsContainer>
  );
};

const mapStateToProps = state => ({
  movie: movieSelectedSelector(state)
});

const mapDispatchToProps = dispatch => ({
  getMovie: movieId => dispatch(startGetMovieById(movieId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetails);
