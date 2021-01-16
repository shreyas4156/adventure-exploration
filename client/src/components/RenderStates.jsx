import React from "react";
import { Media } from "reactstrap";
const RenderStates = (props) => {
  return (
    <Media tag="li">
      <Media left middle>
        <Media
          object
          src={props.state.image}
          alt={props.state.name}
          style={{ height: "120px", width: "120px" }}
        />
      </Media>

      <Media
        body
        className="ml-5"
        style={{
          backgroundColor: "rgba(204, 204, 204, 0.6)",
          padding: "10px",
        }}
      >
        <Media heading style={{ textAlign: "left" }}>
          {props.state.label}
        </Media>
        <p style={{ textAlign: "left" }}>{props.state.caption}</p>
      </Media>
    </Media>
  );
};

export default RenderStates;
