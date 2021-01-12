import React from "react";
import { render } from "react-dom";
import Header from "./components/Header";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "reactstrap/dist/reactstrap";
import "./index.css";

const App = () => (
  <React.Fragment>
    <Header />
  </React.Fragment>
);

render(<App />, document.getElementById("root"));
