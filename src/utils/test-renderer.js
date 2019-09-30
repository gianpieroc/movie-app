import React from "react";
import configureStore from "../redux/store";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import App from "../containers/App";
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
  const Wrapper = () => (
    <Provider store={store}>
      <App history={history} />
    </Provider>
  );
  return {
    ...render(ui, { wrapper: Wrapper }),
    store,
    history
  };
};
