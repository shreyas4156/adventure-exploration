import React from "react";
import { Media } from "reactstrap";
const RenderStates = (props) => {
  return (
    <Media tag="li">
      <Media left middle>
        <Media
          object
          src={
            props.state.hasOwnProperty("caption")
              ? props.state.image
              : "/public/utils/" + props.state.image
          }
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
        <Media
          heading
          style={{ textAlign: "left", cursor: "pointer" }}
          onClick={() => props.setPlace(props.state)}
        >
          {props.state.label || props.state.name}
        </Media>
        <p style={{ textAlign: "left" }}>
          {props.state.caption || props.state.description}
        </p>
      </Media>
    </Media>
  );
};

export default RenderStates;
