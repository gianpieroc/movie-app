import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./containers/App";
import Spinner from "./components/Spinner";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./redux/store";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Spinner />
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
