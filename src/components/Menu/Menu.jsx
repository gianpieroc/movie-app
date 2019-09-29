import React from "react";
import { connect } from "react-redux";
import { isLoadingSelector } from "../../redux/selectors";
import SearchInput from "../SearchInput";
import { MenuContainer, MenuImage, MenuLink } from "./Menu.styled";

const imgSrc =
  "https://www.themoviedb.org/assets/2/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg";

const Menu = () => (
  <MenuContainer>
    <MenuImage src={imgSrc} alt="movie-database-logo" />
    <MenuLink to="/"> The Movie Database </MenuLink>
    <SearchInput />
  </MenuContainer>
);

const mapStateToProps = state => ({
  isLoading: isLoadingSelector(state)
});

export default connect(mapStateToProps)(Menu);
