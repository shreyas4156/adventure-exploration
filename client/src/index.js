import React from "react";
import App from "./components/App";
import { Provider } from "react-redux";
import { render } from "react-dom";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "reactstrap/dist/reactstrap";
import "./index.css";
import { configureStore } from "./redux/configureStores";
import { BrowserRouter } from "react-router-dom";
const store = configureStore();

render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
