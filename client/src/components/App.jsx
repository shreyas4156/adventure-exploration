import React, { useEffect, useState } from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import RenderState from "./RenderState";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchStates, setPlaces } from "./../redux/ActionCreators";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CardImg,
} from "reactstrap";
const mapStateToProps = (state) => ({
  states: state.states,
  places: state.places,
});

const mapDispatchToProps = (dispatch) => ({
  fetchStates: () => dispatch(fetchStates()),
  setPlaces: (state) => dispatch(setPlaces(state)),
});

const App = ({ states, fetchStates, setPlaces, places }) => {
  const [state, setState] = useState(null);
  const [place, setPlace] = useState(null);
  useEffect(() => {
    fetchStates();
  }, []);

  useEffect(() => {
    console.log(state);
    if (state) setPlaces(state.name);
  }, [state]);

  const setStateHelper = (st) => {
    setState(st);
  };

  const toggle = () => setPlace(null);
  const renderStateHelper = ({ match }) => {
    const state = states.states.filter(
      (state) => state.name === match.params.state
    )[0];
    setStateHelper(state);
    return (
      <div style={{ textAlign: "center" }}>
        <RenderState
          state={state}
          places={places}
          setPlace={(p) => setPlace(p)}
        ></RenderState>
      </div>
    );
  };
  return (
    <div>
      <Header
        curState={state}
        setState={(s) => setState(s)}
        states={states.states}
        setPlaces={setPlaces}
        places={places}
        place={place}
        setPlace={(p) => setPlace(p)}
      />
      <Switch>
        <Route
          exact
          path="/states"
          component={() => (
            <Body states={states.states} setPlace={(p) => setPlace(p)} />
          )}
        />
        <Route path="/states/:state" component={renderStateHelper} />
        <Redirect to="/states" />
      </Switch>
      {place ? (
        <Modal isOpen={place ? true : false} toggle={toggle}>
          <ModalHeader
            style={{
              backgroundColor: "rgba(232, 223, 220, 0.7)",
            }}
            toggle={toggle}
          >
            {place.label || place.name}
          </ModalHeader>
          <ModalBody
            style={{
              backgroundColor: "rgba(232, 223, 220, 0.7)",
            }}
          >
            <div>
              <CardImg
                src={
                  place.hasOwnProperty("caption")
                    ? place.image
                    : "/public/utils/" + place.image
                }
                alt={place.name}
              ></CardImg>
            </div>
            {place.description}
          </ModalBody>
        </Modal>
      ) : null}
      <Footer />
    </div>
  );
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
