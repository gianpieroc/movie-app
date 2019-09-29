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
  MovieDetailsRow
} from "./MovieDetails.styled";
import { TMD_IMG_URL } from "../../constants";
import Label from "../../components/Label/Label";

const MovieDetails = ({
  getMovie,
  movie,
  match: {
    params: { movieId }
  }
}) => {
  useEffect(() => {
    getMovie(movieId);
  }, [getMovie, movieId]);

  if (!movie || !movie.title) {
    return null;
  }

  const { poster_path, title, genres, status, vote_average, overview } = movie;

  return (
    <MovieDetailsContainer>
      <MovieDetailsImage src={TMD_IMG_URL + poster_path} />
      <MovieDetailsContent>
        <MovieDetailsTitle>{title}</MovieDetailsTitle>
        <MovieDetailsRow>
          {genres && genres.map(({ name }) => <Label>{name}</Label>)}
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
