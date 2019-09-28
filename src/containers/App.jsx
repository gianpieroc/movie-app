import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import MovieDetails from "./MovieDetails";

const App = () => (
  <BrowserRouter>
    <Route path="/movie/:movieId" component={MovieDetails} />
    <Route path="/" component={Home} />
  </BrowserRouter>
);

export default App;
