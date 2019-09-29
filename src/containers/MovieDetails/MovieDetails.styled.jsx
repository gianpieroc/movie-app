import styled from "styled-components";

export const MovieDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const MovieDetailsContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const MovieDetailsButton = styled.button`
  background: transparent;
  color: blue;
  border-width: 0;
  outline: none;
  font-size: 25px;
  align-self: flex-start;
`;

export const MovieDetailsRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const MovieDetailsImage = styled.img`
  width: 30%;
`;

export const MovieDetailsTitle = styled.h1``;

export const MovieDetailsDescription = styled.p``;
