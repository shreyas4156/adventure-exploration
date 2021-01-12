import React from "react";
import { Jumbotron, Button } from "reactstrap";
const Header = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{
          textAlign: "center",
          backgroundColor: "rgba(204, 204, 204, 0.8)",
        }}
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            Adventure
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  States
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdown"
                  style={{ backgroundColor: "rgba(204, 204, 204, 0.8)" }}
                >
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Jumbotron>
        <h1 className="display-2">
          India {"  "}
          <img src="https://img.icons8.com/emoji/65/000000/india-emoji.png" />
        </h1>
        <p className="lead">
          <strong>India is a land of Unity in Diversity,</strong>{" "}
        </p>
        <hr className="my-2" />
        <p>
          India, country that occupies the greater part of South Asia. Its
          capital is New Delhi, built in the 20th century just south of the
          historic hub of Old Delhi to serve as India’s administrative centre.
          Its government is a constitutional republic that represents a highly
          diverse population consisting of thousands of ethnic groups and likely
          hundreds of languages.With roughly one-sixth of the world’s total
          population, India is the second most populous country, after China.
        </p>
      </Jumbotron>
    </div>
  );
};

export default Header;
