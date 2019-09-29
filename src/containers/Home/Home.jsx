import React, { useEffect, Fragment } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { startGetMovies } from "../../redux/actions";
import { moviesSelector } from "../../redux/selectors";
import MovieCard from "../../components/MovieCard";

const HomeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

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
