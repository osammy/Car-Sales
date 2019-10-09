import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import * as reducers from "./reducers/reducers";
import "bulma/css/bulma.css";
import "./styles.scss";

const allReducers = combineReducers({
  car: reducers.carReducer,
  shop: reducers.storeReducer,
  extras: reducers.extraReducer
});

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
