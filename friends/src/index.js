import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { logger } from "redux-logger";

const initialState = {
  friends: [
    {
      id: 1,
      name: "Ben",
      age: 30,
      email: "ben@lambdaschool.com"
    },
    {
      id: 2,
      name: "Austen",
      age: 45,
      email: "austen@lambdaschool.com"
    },
    {
      id: 3,
      name: "Ryan",
      age: 15,
      email: "ryan@lambdaschool.com"
    },
    {
      id: 4,
      name: "Sean",
      age: 35,
      email: "sean@lambdaschool.com"
    },
    {
      id: 5,
      name: "Michelle",
      age: 67,
      email: "michelle@gmail.com"
    }
  ]
};

const tempReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(tempReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);