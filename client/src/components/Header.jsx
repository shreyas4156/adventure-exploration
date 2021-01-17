import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Dropdown } from "reactstrap";
const Header = (props) => {
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
          <NavLink
            onChange={() => props.setState(null)}
            className="navbar-brand"
            to="/states"
          >
            <h3 onClick={() => props.setState(null)}>Adventure</h3>
          </NavLink>
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
                <NavLink className="nav-link" to="/states">
                  <div onClick={() => props.setState(null)}>Home</div>
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <Dropdown
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {props.curState ? props.curState.label : "States"}
                </Dropdown>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdown"
                  style={{ backgroundColor: "rgba(204, 204, 204, 0.8)" }}
                >
                  {props.states.map((state) => {
                    return (
                      <Link
                        onClick={() => props.setPlaces(state.name)}
                        className="dropdown-item"
                        to={`/states/${state.name}`}
                        key={state._id}
                      >
                        {state.label}
                      </Link>
                    );
                  })}
                </div>
              </li>
              {props.curState && props.places ? (
                <li className="nav-item dropdown">
                  <Dropdown
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {"Places"}
                  </Dropdown>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                    style={{ backgroundColor: "rgba(204, 204, 204, 0.8)" }}
                  >
                    {props.places.places.map((place) => {
                      return (
                        <div
                          style={{ cursor: "pointer" }}
                          onClick={() => props.setPlace(place)}
                          className="dropdown-item"
                          key={place._id}
                        >
                          {place.name}
                        </div>
                      );
                    })}
                  </div>
                </li>
              ) : null}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
