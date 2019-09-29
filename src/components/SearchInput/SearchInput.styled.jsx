import styled from "styled-components";
import { Link } from "react-router-dom";

export const InputStyled = styled.input`
  font-size: 18px;
  border-style: solid;
  border-color: transparent;
  color: darkblue;
  border-radius: 15px;
  border-width: 1px;
  padding: 10px 10px;
  outline: none;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 50px;
`;

export const SearchBoxContainer = styled.div`
  position: absolute;
  top: 50px;
  border-radius: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

export const SearchBoxItem = styled.div`
  padding: 10px 20px;
  :hover {
    background-color: lightgray;
  }
`;

export const SearchBoxLink = styled(Link)`
  color: black;
  text-decoration: none;
`;
