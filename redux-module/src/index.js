import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, combineReducers } from "redux";
import counterReducer from "./store/reducers/counter";
import resultReducer from "./store/reducers/result";
import { Provider } from "react-redux";

const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
