import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  InputStyled,
  InputContainer,
  SearchBoxContainer,
  SearchBoxItem,
  SearchBoxLink
} from "./SearchInput.styled";
import { startSearchMovie } from "../../redux/actions";
import { searchMoviesSelector } from "../../redux/selectors";

const SearchInput = ({ searchItem, searchMoviesHistory }) => {
  const [inputValue, setInputValue] = React.useState("");

  const onChangeSearch = e => {
    const { value } = e.target;
    setInputValue(value);
    searchItem(value);
  };

  return (
    <InputContainer>
      <InputStyled
        placeholder="🔎search"
        value={inputValue}
        onChange={onChangeSearch}
      />
      <SearchBoxContainer>
        {searchMoviesHistory &&
          searchMoviesHistory.length > 0 &&
          searchMoviesHistory.slice(0, 6).map(movie => (
            <SearchBoxLink key={movie.id} to={"/movie/" + movie.id}>
              <SearchBoxItem>{movie.title}</SearchBoxItem>
            </SearchBoxLink>
          ))}
      </SearchBoxContainer>
    </InputContainer>
  );
};

SearchInput.propTypes = {
  searchItem: PropTypes.func,
  searchMoviesHistory: PropTypes.arrayOf(PropTypes.shape({}))
};

const mapStateToProps = state => ({
  searchMoviesHistory: searchMoviesSelector(state)
});

const mapDispatchToProps = dispatch => ({
  searchItem: text => dispatch(startSearchMovie(text))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchInput);
