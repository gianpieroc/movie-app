import styled from "styled-components";
import { Link } from "react-router-dom";

export const MenuContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #00522e;
  background-image: linear-gradient(to right, #00522e, #01d277);
`;

export const MenuImage = styled.img`
  width: 75px;
  padding: 10px 0;
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  font-size: 24px;
  color: white;

  @media (max-width: 720px) {
    display: none;
  }
`;
