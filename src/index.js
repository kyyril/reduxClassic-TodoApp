/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import reducer from "./reducers";
import { Provider } from "react-redux";

const middleware = [thunk];
const store = createStore(reducer, applyMiddleware(...middleware));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
