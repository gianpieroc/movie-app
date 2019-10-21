import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import Home from "./Home";
import MovieDetails from "./MovieDetails";
import Spinner from "./Spinner";
import Menu from "../components/Menu";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 1500px;
  width: 90%;
  margin: 30px auto;
  justify-content: flex-start;
  align-items: center;
  * {
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    text-decoration: none;
  }
`;

const App = () => (
  <BrowserRouter>
    <Menu />
    <Container>
      <Spinner />
      <Route path="/movie/:movieId" component={MovieDetails} />
      <Route exact path="/" component={Home} />
    </Container>
  </BrowserRouter>
);

export default App;
