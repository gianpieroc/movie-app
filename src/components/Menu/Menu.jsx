import React from "react";
import { connect } from "react-redux";
import { BounceLoader } from "react-spinners";
import { isLoadingSelector } from "../../redux/selectors";

const imgSrc =
  "https://www.themoviedb.org/assets/2/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg";

const css = `
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Spinner = ({ isLoading }) => (
  <div>
    <img src={imgSrc} alt="movie-database-logo" />
    <h3>Movie Database</h3>
    <input placeholder="search" />
  </div>
);

const mapStateToProps = state => ({
  isLoading: isLoadingSelector(state)
});

export default connect(mapStateToProps)(Spinner);
