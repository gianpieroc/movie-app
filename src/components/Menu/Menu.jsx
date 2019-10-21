import React from "react";
import SearchInput from "../SearchInput";
import { MenuContainer, MenuImage, MenuLink } from "./Menu.styled";

const imgSrc =
  "https://www.themoviedb.org/assets/2/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg";

const Menu = () => (
  <MenuContainer data-testid="menu-container">
    <MenuLink to="/">
      <MenuImage src={imgSrc} alt="movie-database-logo" />
    </MenuLink>
    <MenuLink to="/"> The Movie Database </MenuLink>
    <SearchInput />
  </MenuContainer>
);

export default Menu;
