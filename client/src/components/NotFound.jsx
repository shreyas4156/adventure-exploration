import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>404 Page Not Found</h1>
      <Link to="/states">Home</Link>
    </div>
  );
};

export default NotFound;
