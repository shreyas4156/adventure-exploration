import React, { useEffect } from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import { connect } from "react-redux";
import { fetchStates } from "./../redux/ActionCreators";

const mapStateToProps = (state) => ({
  states: state.states,
});
const mapDispatchToProps = (dispatch) => ({
  fetchStates: () => dispatch(fetchStates()),
});

const App = ({ states, fetchStates }) => {
  useEffect(() => {
    fetchStates();
  }, []);

  return (
    <div>
      {" "}
      <Header states={states.states} />
      <Switch>
        <Route path="/home" component={() => <Body states={states.states} />} />
        {/* <Route path="/states/:state" component={RenderState} />
        <Route path="/places/:place" component={RenderPlace} /> */}
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </div>
  );
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
