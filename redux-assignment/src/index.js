import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = {
  persons: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "PERSON_ADD":
      return {
        ...state,
        persons: state.persons.concat(action.payload)
      };
      break;
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
