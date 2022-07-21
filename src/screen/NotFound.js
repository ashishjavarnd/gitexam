import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center">
      <div className="m5 p5">
        <h2>404 ERROR</h2>
        <h5>
          PAGE NOT FOUND
          </h5>
          <Link to="/">Go to home</Link>
          </div>
    </div>
  );
};

export default NotFound;
