import React, { useEffect } from "react";
import { connect } from "react-redux";
import { startGetMovies } from "../../redux/actions";
import { moviesSelector } from "../../redux/selectors";

const Home = ({ getMovies, movies }) => {
  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return <div></div>;
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
