import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { startGetMovies } from "../../redux/movie/actions";
import { moviesSelector } from "../../redux/movie/selectors";
import MovieCard from "../../components/MovieCard";
import { HomeContainer } from "./Home.styled";

const Home = ({ getMovies, movies }) => {
  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <Fragment>
      <h1> Most Popular movies </h1>
      <HomeContainer>
        {movies &&
          movies.length > 0 &&
          movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
      </HomeContainer>
    </Fragment>
  );
};

Home.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({})),
  getMovies: PropTypes.func
};

const mapStateToProps = state => ({
  movies: moviesSelector(state)
});

const mapDispatchToProps = dispatch => ({
  getMovies: () => dispatch(startGetMovies())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
