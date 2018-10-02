import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import RouterApp from "./router";
import "styles/styles.css";
import store from 'store'
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Provider store={store}>
    <RouterApp />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
