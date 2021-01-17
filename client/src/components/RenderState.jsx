import React from "react";
import { Link } from "react-router-dom";
import RenderStates from "./RenderStates";
import { Media } from "reactstrap";
import { Fade, Stagger } from "react-animation-components";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

const RenderState = ({ state, places, setPlace }) => {
  if (!state)
    return (
      <div>
        <h1>Not Found</h1>
        <Link to="/states">Home</Link>
      </div>
    );
  else {
    const pl = places.places.map((place) => {
      return (
        <div key={place._id}>
          <RenderStates state={place} setPlace={(s) => setPlace(s)} />
          <br />
        </div>
      );
    });
    return (
      <div
        className="container"
        style={{
          textAlign: "center",
          marginTop: "35px",
          marginBottom: "35px",
        }}
      >
        {/*jeera mensu bella uppu shunti arshna karibevu pudina tulsi jenu limbe*/}
        <div className="container">
          <div
            style={{
              height: "50%",
              width: "100%",
            }}
          >
            <Card
              style={{
                backgroundColor: "rgba(204, 204, 204, 0.8)",
              }}
            >
              <CardTitle
                tag="h2"
                style={{
                  textAlign: "center",
                  fontStyle: "italic",
                }}
              >
                {state.label}
              </CardTitle>
              <CardImg top src={state.image} alt="Card image cap" />
              <CardBody
                style={{
                  backgroundColor: "rgba(204, 204, 204, 0.8)",
                }}
              >
                <CardSubtitle
                  style={{ textAlign: "justify" }}
                  tag="h6"
                  className="mb-2 text-muted"
                >
                  {state.caption}
                </CardSubtitle>
                <CardText style={{ textAlign: "justify" }}>
                  {state.description}
                </CardText>
              </CardBody>
            </Card>
          </div>
        </div>
        <div
          className="row row-content"
          style={{
            backgroundColor: "rgba(232, 223, 220, 0.8)",
            margin: "40px",
          }}
        >
          <div className="col-9">
            <h1
              style={{
                margin: "40px",
                padding: "10px",
                textAlign: "left",
              }}
            >
              Top Tourist states in {state.label}
            </h1>
          </div>
          <div className="col-lg-12 col-md-4 col-sm-2">
            <Media list>{pl}</Media>
          </div>
        </div>
      </div>
    );
  }
};

export default RenderState;
