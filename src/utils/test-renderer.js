import React from "react";
import configureStore from "../redux/store";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

export const renderWithRedux = ui => {
  const store = configureStore();
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store
  };
};

export const renderWithRouterAndRedux = (
  ui,
  {
    store = configureStore(),
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] })
  } = {}
) => {
  const Wrapper = ({ children }) => (
    <Provider store={store}>
      <Router history={history}>{children}</Router>
    </Provider>
  );
  return {
    ...render(ui, { wrapper: Wrapper }),
    store,
    history
  };
};
