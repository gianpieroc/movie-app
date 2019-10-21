import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  InputStyled,
  InputContainer,
  SearchBoxContainer,
  SearchBoxItem,
  SearchBoxLink
} from "./SearchInput.styled";
import { startSearchMovie } from "../../redux/movie/actions";
import { searchMoviesSelector } from "../../redux/movie/selectors";

const SEARCH_ITEMS_LIMIT = 6;
const SEARCH_ITEMS_CHARS_LIMIT = 2;

const SearchInput = ({ searchItem, searchMoviesHistory }) => {
  const [inputValue, setInputValue] = React.useState("");
  useEffect(() => clearTimeout(), []);

  const onChangeSearch = e => {
    const { value } = e.target;
    setInputValue(value);
    if (value.length > SEARCH_ITEMS_CHARS_LIMIT) {
      searchItem(value);
    }
  };

  return (
    <InputContainer>
      <InputStyled
        placeholder="🔎search"
        aria-label="search-input"
        value={inputValue}
        onChange={onChangeSearch}
      />
      <SearchBoxContainer>
        {inputValue.length > SEARCH_ITEMS_CHARS_LIMIT &&
          Array.isArray(searchMoviesHistory) &&
          searchMoviesHistory
            .slice(0, SEARCH_ITEMS_LIMIT)
            .map(({ id, title, release_date }) => {
              const date = new Date(release_date).getFullYear();
              const releaseDate = !isNaN(date) ? `(${date})` : "";
              const itemText = `${title} ${releaseDate}`;

              return (
                <SearchBoxLink key={id} to={"/movie/" + id}>
                  <SearchBoxItem>{itemText}</SearchBoxItem>
                </SearchBoxLink>
              );
            })}
      </SearchBoxContainer>
    </InputContainer>
  );
};

SearchInput.propTypes = {
  searchItem: PropTypes.func,
  searchMoviesHistory: PropTypes.arrayOf(
    PropTypes.shape({
      poster_path: PropTypes.string,
      title: PropTypes.string,
      vote_average: PropTypes.number,
      id: PropTypes.number
    })
  )
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
